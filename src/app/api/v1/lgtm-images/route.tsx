import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import { DEFAULT_VALUES } from "./_constants";
import {
  importLgtmDataModule,
  getSearchParams,
  handleMissingTheme,
  handleError,
  validateInputData,
  handleValidationError,
} from "./_utils";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const cache = await caches.open("lgtm-images");
  const cacheKey = new Request(request.url);

  let response = await cache.match(cacheKey);
  if (response) {
    return response;
  }

  const { theme, text, emoji, color } = getSearchParams(request);

  const inputData = {
    emoji: emoji || DEFAULT_VALUES.emoji,
    text: text || DEFAULT_VALUES.text,
    color: color || DEFAULT_VALUES.color,
  };

  // テーマが入力されなかった場合
  if (!theme) {
    return await handleMissingTheme(inputData);
  }

  const validationResult = await validateInputData(inputData);
  if (!validationResult.success) {
    return await handleValidationError(inputData);
  }

  try {
    const getLgtmData = await importLgtmDataModule(theme);
    const { element, options } = await getLgtmData(inputData);
    response = new ImageResponse(element, {
      ...options,
      status: 200,
      headers: {
        "CDN-Cache-Control": "public, max-age=31536000, immutable",
      },
    });

    await cache.put(cacheKey, response.clone());

    return response;
  } catch (error: unknown) {
    return await handleError(error, theme, inputData);
  }
}
