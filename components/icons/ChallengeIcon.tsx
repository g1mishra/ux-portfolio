import React from "react";

interface ChallengeIconProps {
  color: string;
  className?: string;
}

const ChallengeIcon: React.FC<ChallengeIconProps> = ({ color, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={57}
    height={56}
    viewBox="0 0 57 56"
    fill="none"
    className={className}
  >
    <g clipPath="url(#a)">
      <path
        d="M55.58 28c0-14.69-11.908-26.6-26.6-26.6-14.69 0-26.6 11.91-26.6 26.6 0 14.69 11.91 26.6 26.6 26.6 14.692 0 26.6-11.91 26.6-26.6Z"
        fill={color}
        fillOpacity={0.1}
      />
      <path
        d="m13.396 39.31 15.585-26.927 15.584 26.926H13.397Zm3.984-2.302h23.202L28.98 16.976l-11.6 20.032Zm11.747-1.92c.302 0 .557-.105.765-.317a1.06 1.06 0 0 0 .312-.772c0-.302-.106-.556-.318-.761a1.069 1.069 0 0 0-.771-.308c-.303 0-.558.105-.766.314-.208.21-.312.465-.312.767 0 .303.106.558.318.766.212.208.47.312.772.312Zm-1.056-3.867h2.1v-7.774h-2.1v7.774Z"
        fill={color}
      />
      <path
        d="M55.58 28c0-14.69-11.908-26.6-26.6-26.6-14.69 0-26.6 11.91-26.6 26.6 0 14.69 11.91 26.6 26.6 26.6 14.692 0 26.6-11.91 26.6-26.6Z"
        stroke="url(#b)"
        strokeWidth={2.8}
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={28.981}
        y1={0}
        x2={28.981}
        y2={56}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={color} />
        <stop offset={1} stopColor={color} stopOpacity={0} />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M.98 0h56v56h-56z" />
      </clipPath>
    </defs>
  </svg>
);

export default ChallengeIcon;
