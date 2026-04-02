interface ImgSlotProps {
  label: string;
  hint: string;
  aspectRatio?: string;
  src?: string;
  dark?: boolean;
}

export default function ImgSlot({
  label,
  hint,
  aspectRatio = "16/9",
  src = "",
  dark = false,
}: ImgSlotProps) {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio,
        borderRadius: 12,
        overflow: "hidden",
        position: "relative",
        background: src
          ? "transparent"
          : dark
            ? "rgba(255,255,255,0.04)"
            : "rgba(26,26,26,0.04)",
        border: src
          ? "none"
          : `2px dashed ${dark ? "rgba(255,255,255,0.12)" : "rgba(26,26,26,0.15)"}`,
      }}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={label}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      ) : (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            padding: 32,
            textAlign: "center",
          }}
        >
          <span style={{ fontSize: 28 }}>🖼</span>
          <p
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: dark ? "#f0ece4" : "#1a1a1a",
              margin: 0,
            }}
          >
            {label}
          </p>
          <p
            style={{
              fontSize: 12,
              color: dark ? "rgba(240,236,228,0.5)" : "#888",
              margin: 0,
              maxWidth: 360,
              lineHeight: 1.6,
            }}
          >
            {hint}
          </p>
        </div>
      )}
    </div>
  );
}
