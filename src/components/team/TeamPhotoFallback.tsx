import { LuUserRound } from "react-icons/lu";

type TeamPhotoFallbackProps = {
  name: string;
  className?: string;
};

/** Shown in place of a team member's photo when it fails to load. */
export const TeamPhotoFallback = ({
  name,
  className = "",
}: TeamPhotoFallbackProps) => (
  <div
    role="img"
    aria-label={`No photo of ${name}`}
    className={`flex items-center justify-center bg-navy-200 text-navy-500 ${className}`}
  >
    <LuUserRound className="size-1/2" aria-hidden />
  </div>
);
