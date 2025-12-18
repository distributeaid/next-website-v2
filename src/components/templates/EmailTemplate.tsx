import * as React from "react";

interface EmailTemplateProps {
  message: string;
}

export function EmailTemplate({ message }: EmailTemplateProps) {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}
