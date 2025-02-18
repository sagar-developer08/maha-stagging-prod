// app/template.js (Server Component - SSR)
import ClientWrapper from "./ClientWrapper";

export default function Template({ children }) {
  return (
    <div className="layout-container">
      <ClientWrapper>{children}</ClientWrapper>
    </div>
  );
}
