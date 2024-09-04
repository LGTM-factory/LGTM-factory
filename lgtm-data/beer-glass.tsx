import { GetLgtmDataResult, InputData } from "@/types/lgtm-data";
import getFontData from "@/utils/google-font";
import { ImageResponseOptions } from "next/server";

async function getLgtmData(inputData: InputData): Promise<GetLgtmDataResult> {
  const designInfo = {
    author: "kazzyfrog",
    description:
      "夜はビールも提供しています。グラスに一言メッセージを書いて差し入れできます:)",
    editableFields: ["text"],
  };

  const options: ImageResponseOptions = {
    width: 384,
    height: 461,
    emoji: "noto",
    fonts: [
      {
        name: "Caveat",
        data: await getFontData(
          "https://fonts.googleapis.com/css2?family=Caveat:wght@700",
        ),
        weight: 700,
      },
      {
        name: "Yusei Magic",
        data: await getFontData(
          "https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap",
        ),
        weight: 400,
      },
    ],
  };

  const element = (
    <div tw="flex h-full w-full flex-col items-center justify-center">
      <div tw="absolute flex">
        <svg
          width="269"
          height="308"
          viewBox="0 0 269 308"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m22.668 306.667-17.474-247h258.612l-17.38 247z"
            fill="url(#a)"
          />
          <path
            d="M72.692 249.648h2.328v15.12h8.808V267H72.692zm28.186 15.864q-.36.312-1.008.624-.648.288-1.44.528-.768.24-1.608.384a9 9 0 0 1-1.536.144q-2.088 0-3.768-.648a8.6 8.6 0 0 1-2.856-1.8 8.1 8.1 0 0 1-1.824-2.712q-.624-1.56-.624-3.384 0-2.16.696-3.864.72-1.728 1.944-2.904 1.248-1.2 2.856-1.8a9.3 9.3 0 0 1 3.408-.624q1.512 0 2.808.36t2.28.912l-.792 2.136a6 6 0 0 0-1.2-.528q-.696-.24-1.44-.384a6.3 6.3 0 0 0-1.392-.168q-1.536 0-2.784.48a5.8 5.8 0 0 0-2.136 1.344 5.8 5.8 0 0 0-1.368 2.112q-.48 1.224-.48 2.76 0 1.416.48 2.592t1.368 2.04q.888.84 2.112 1.32 1.248.456 2.736.456.888 0 1.752-.168a5.8 5.8 0 0 0 1.488-.528v-3.456h-3.456v-2.232h5.784zm3.167-15.864h11.52v2.232h-4.656V267h-2.328v-15.12h-4.536zM119.263 267v-17.904h.024l9.096 12.912-.984-.192 9.072-12.72h.048V267h-2.304v-12.624l.144 1.176-6.552 9.264h-.048l-6.648-9.264.408-1.08V267zm37.348-.912a5.3 5.3 0 0 1-1.608.84 5.9 5.9 0 0 1-1.872.312q-1.632 0-2.856-.648a4.84 4.84 0 0 1-1.92-1.8q-.672-1.176-.672-2.76t.72-2.76a5.05 5.05 0 0 1 1.92-1.8 5.3 5.3 0 0 1 2.568-.648q1.2 0 2.136.336.96.336 1.632.912l-1.104 1.44a4.7 4.7 0 0 0-1.056-.6 3.6 3.6 0 0 0-1.416-.264q-.864 0-1.608.456-.72.432-1.152 1.2a3.6 3.6 0 0 0-.408 1.728q0 .912.432 1.704.432.768 1.2 1.224.768.432 1.752.432.648 0 1.176-.192.552-.192.984-.528zm7.009 1.152q-1.392 0-2.544-.6a4.5 4.5 0 0 1-1.8-1.752q-.648-1.176-.648-2.856 0-1.656.696-2.856.696-1.224 1.848-1.872a5.23 5.23 0 0 1 2.568-.648q1.392 0 2.352.648.96.624 1.464 1.488l-.144.384.216-2.112h2.064V267h-2.232v-2.592l.24.576q-.096.24-.432.624-.312.36-.864.744a5.2 5.2 0 0 1-1.224.648q-.696.24-1.56.24m.6-1.848q.84 0 1.512-.312a2.96 2.96 0 0 0 1.104-.864q.456-.576.624-1.368v-1.944a2.96 2.96 0 0 0-.672-1.248 3.15 3.15 0 0 0-1.152-.84 3.5 3.5 0 0 0-1.488-.312q-.888 0-1.632.432a3.3 3.3 0 0 0-1.2 1.2q-.432.768-.432 1.8 0 .96.456 1.752t1.224 1.248a3.2 3.2 0 0 0 1.656.456M174.37 267v-7.944h-1.704v-1.992h1.704v-4.2q0-2.16.96-3.312.984-1.152 2.88-1.152.504 0 1.104.144.624.144 1.08.48l-.936 1.608a1.1 1.1 0 0 0-.48-.288 1.5 1.5 0 0 0-.528-.096q-.888 0-1.368.6t-.48 2.04v4.176h3.144v1.992h-3.144V267zm12.347.24q-1.704 0-2.928-.672a4.96 4.96 0 0 1-1.896-1.872q-.648-1.2-.648-2.736 0-1.464.744-2.664a5.6 5.6 0 0 1 1.992-1.92q1.248-.72 2.784-.72 1.968 0 3.264 1.152t1.752 3.168l-8.184 2.88-.528-1.32 6.72-2.448-.48.312a3.24 3.24 0 0 0-.96-1.368q-.672-.6-1.752-.6-.912 0-1.632.456-.72.432-1.128 1.2t-.408 1.752q0 1.032.432 1.824.432.768 1.176 1.224a3.46 3.46 0 0 0 1.728.432q.648 0 1.248-.24.624-.24 1.152-.624l1.032 1.656a6.8 6.8 0 0 1-1.68.816 5.5 5.5 0 0 1-1.8.312"
            fill="#000"
          />
          <path stroke="#000" d="M57.274 281.167h154.319" />
          <path d="M266.951 11H2.048l3.309 48.667h258.186z" fill="#fff" />
          <ellipse
            cx="205.793"
            cy="239"
            rx="10.484"
            ry="10"
            fill="#fff"
            fill-opacity=".8"
          />
          <ellipse
            cx="218.374"
            cy="195.667"
            rx="6.99"
            ry="6.667"
            fill="#fff"
            fill-opacity=".8"
          />
          <ellipse
            cx="190.067"
            cy="218.667"
            rx="5.242"
            ry="5"
            fill="#fff"
            fill-opacity=".8"
          />
          <path d="M22.318 307 1 1h267l-21.318 306z" stroke="#D9D9D9" />
          <defs>
            <linearGradient
              id="a"
              x1="69.524"
              y1="51"
              x2="69.524"
              y2="307"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFB84E" />
              <stop offset="1" stop-color="#FFE485" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div tw="w-[250px] h-[180px] flex overflow-hidden items-center text-center justify-center">
        <p
          tw="text-[48px]"
          style={{
            transform: "rotate(-6.5deg)",
            wordBreak: "break-all",
          }}
        >
          {inputData.text}
        </p>
      </div>
    </div>
  );

  return {
    designInfo,
    element,
    options,
  };
}

export default getLgtmData;
