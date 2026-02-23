import * as React from "react";

interface EmailTemplateProps {
  message: string;
  fromName: string;
  fromEmail: string;
}

export function EmailTemplate({
  message,
  fromName,
  fromEmail,
}: EmailTemplateProps) {
  return (
    <div>
      <p>{message}</p>
      <br />
      <p>
        {fromName}
        <br />
        {fromEmail}
      </p>
    </div>
  );
}
