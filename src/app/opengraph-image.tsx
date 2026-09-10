import { ImageResponse } from "next/og";

export const alt =
  "Amine Kassi — Développeur Full-Stack TypeScript";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          color: "white",
          background:
            "radial-gradient(circle at 20% 20%, rgba(0,230,230,.22), transparent 32%), radial-gradient(circle at 80% 70%, rgba(155,92,255,.18), transparent 30%), #020506",
        }}
      >
        <div
          style={{
            color: "#00e6e6",
            fontSize: 24,
            letterSpacing: "6px",
          }}
        >
          FULL-STACK DEVELOPER
        </div>

        <div
          style={{
            marginTop: 30,
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          Amine Kassi
        </div>

        <div
          style={{
            marginTop: 28,
            color: "rgba(255,255,255,.65)",
            fontSize: 32,
          }}
        >
          TypeScript · React · Next.js · Node.js
        </div>
      </div>
    ),
    size,
  );
}