"use client";

export default function DownloadButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button className="download-btn" type="button" onClick={handlePrint}>
      Download PDF
    </button>
  );
}
