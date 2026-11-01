import { rectangleLogoData, squareLogoData } from "./logo-data";

const variants = {
  dark: {
    squareColor: "#F4F4F0",
    accentColor: "#FF3B00",
    bgColor: "#0A0A0A00",
    dotColor: "#242424",
    borderColor: "#222222",
  },
  light: {
    squareColor: "#242424",
    accentColor: "#FF3B00",
    bgColor: "#FFFFFF00",
    dotColor: "#D5D5CE",
    borderColor: "#E5E5DF",
  },
};

export const SquareLogo = ({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) => {
  return (
    <div className={className}>
      <svg
        className="h-full w-full"
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          id="base-layer"
          width="512"
          height="512"
          rx="68"
          fill={variants[variant].bgColor}
        />
        <rect
          id="inner-ring"
          x="20"
          y="20"
          width="472"
          height="472"
          rx="48"
          stroke={variants[variant].borderColor}
          strokeWidth="2"
        />
        {squareLogoData.dots.map((dot) => (
          <path
            key={dot.id}
            id={dot.id}
            d={dot.d}
            fill={variants[variant].dotColor}
          />
        ))}
        {squareLogoData.accentDots.map((accentDot) => (
          <path
            key={accentDot.id}
            id={accentDot.id}
            d={accentDot.d}
            fill={variants[variant].accentColor}
          />
        ))}
        {squareLogoData.squares.map((square) => (
          <path
            key={square.id}
            id={square.id}
            d={square.d}
            fill={variants[variant].squareColor}
          />
        ))}
      </svg>
    </div>
  );
};

export const RectangleLogo = ({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) => {
  return (
    <div className={className}>
      <svg
        className="h-full w-full"
        // width="800"
        // height="200"
        viewBox="0 0 800 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          id="base-layer"
          width="800"
          height="200"
          rx="24"
          fill={variants[variant].bgColor}
        />
        <path
          id={rectangleLogoData.inner_ring.id}
          d={rectangleLogoData.inner_ring.d}
          stroke={variants[variant].borderColor}
          strokeWidth="2"
        />
        <g id="square">
          {rectangleLogoData.square.accentDots.map((accentDot) => (
            <path
              key={accentDot.id}
              id={accentDot.id}
              d={accentDot.d}
              fill={variants[variant].accentColor}
            />
          ))}
          {rectangleLogoData.square.dots.map((dot) => (
            <path
              key={dot.id}
              id={dot.id}
              d={dot.d}
              fill={variants[variant].dotColor}
            />
          ))}
          {rectangleLogoData.square.squares.map((square) => (
            <path
              key={square.id}
              id={square.id}
              d={square.d}
              fill={variants[variant].squareColor}
            />
          ))}
        </g>
        <path
          id={rectangleLogoData.divider.id}
          d={rectangleLogoData.divider.d}
          fill={variants[variant].borderColor}
        />
        <g id="up-u">
          {rectangleLogoData.up_u.dots.map((dot) => (
            <path
              key={dot.id}
              id={dot.id}
              d={dot.d}
              fill={variants[variant].dotColor}
            />
          ))}
          {rectangleLogoData.up_u.squares.map((square) => (
            <path
              key={square.id}
              id={square.id}
              d={square.d}
              fill={variants[variant].squareColor}
            />
          ))}
        </g>
        <g id="up-p">
          {rectangleLogoData.up_p.dots.map((dot) => (
            <path
              key={dot.id}
              id={dot.id}
              d={dot.d}
              fill={variants[variant].dotColor}
            />
          ))}
          {rectangleLogoData.up_p.squares.map((square) => (
            <path
              key={square.id}
              id={square.id}
              d={square.d}
              fill={variants[variant].squareColor}
            />
          ))}
        </g>
        <g id="2">
          {rectangleLogoData.up_2.dots.map((dot) => (
            <path
              key={dot.id}
              id={dot.id}
              d={dot.d}
              fill={variants[variant].dotColor}
            />
          ))}
          {rectangleLogoData.up_2.accentDots.map((accentDot) => (
            <path
              key={accentDot.id}
              id={accentDot.id}
              d={accentDot.d}
              fill={variants[variant].accentColor}
            />
          ))}
        </g>
        <g id="p">
          {rectangleLogoData.px_p.dots.map((dot) => (
            <path
              key={dot.id}
              id={dot.id}
              d={dot.d}
              fill={variants[variant].dotColor}
            />
          ))}
          {rectangleLogoData.px_p.squares.map((square) => (
            <path
              key={square.id}
              id={square.id}
              d={square.d}
              fill={variants[variant].squareColor}
            />
          ))}
        </g>
        <g id="x">
          {rectangleLogoData.px_x.dots.map((dot) => (
            <path
              key={dot.id}
              id={dot.id}
              d={dot.d}
              fill={variants[variant].dotColor}
            />
          ))}
          {rectangleLogoData.px_x.accentDots.map((accentDot) => (
            <path
              key={accentDot.id}
              id={accentDot.id}
              d={accentDot.d}
              fill={variants[variant].accentColor}
            />
          ))}
          {rectangleLogoData.px_x.squares.map((square) => (
            <path
              key={square.id}
              id={square.id}
              d={square.d}
              fill={variants[variant].squareColor}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};
