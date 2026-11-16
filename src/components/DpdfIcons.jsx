import React from 'react';

// Dpdf.com exact vector icons

export const MergePdfIcon = ({ size = 48, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M 24 4 H 11 Q 5 4 5 10 V 38 Q 5 44 11 44 H 24 Z" fill="rgb(184, 161, 251)" />
    <path d="M 24 4 H 37 Q 43 4 43 10 V 38 Q 43 44 37 44 H 24 Z" fill="#8962F8" />
    <text x="14.5" y="29.5" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="800" fontFamily="Inter, -apple-system, sans-serif">A</text>
    <text x="33.5" y="29.5" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="800" fontFamily="Inter, -apple-system, sans-serif">B</text>
  </svg>
);

export const SplitPdfIcon = ({ size = 48, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <g transform="rotate(-6 12 24)">
      <path d="M 20.5 6 H 9 Q 3 6 3 12 V 36 Q 3 42 9 42 H 20.5 Z" fill="rgb(184, 161, 251)" />
    </g>
    <g transform="rotate(6 36 24)">
      <path d="M 27.5 6 H 39 Q 45 6 45 12 V 36 Q 45 42 39 42 H 27.5 Z" fill="#8962F8" />
    </g>
    <text x="12" y="29" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="800" fontFamily="Inter, -apple-system, sans-serif">A</text>
    <text x="36" y="29" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="800" fontFamily="Inter, -apple-system, sans-serif">B</text>
    <path d="M 24 2 V 46" stroke="#8962F8" strokeWidth="1.6" strokeDasharray="3 3" strokeLinecap="round" />
  </svg>
);

export const CompressPdfIcon = ({ size = 48, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <rect x="9" y="2" width="6" height="44" rx="3" fill="#FB212F" />
    <rect x="15" y="6" width="6" height="36" rx="1" fill="#D9101D" />
    <rect x="21" y="2" width="6" height="44" rx="1" fill="#FB212F" />
    <rect x="27" y="6" width="6" height="36" rx="1" fill="#D9101D" />
    <rect x="33" y="2" width="6" height="44" rx="3" fill="#FB212F" />
    <g stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 0.5 24 H 6 M 3.5 21.5 L 6 24 L 3.5 26.5" />
      <path d="M 47.5 24 H 42 M 44.5 21.5 L 42 24 L 44.5 26.5" />
    </g>
  </svg>
);

export const RemovePagesIcon = ({ size = 48, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <rect x="5" y="5" width="18" height="18" rx="3.5" fill="#8962F8" />
    <rect x="25" y="5" width="18" height="18" rx="3.5" fill="rgb(184, 161, 251)" />
    <path d="M 30 10 L 38 18 M 38 10 L 30 18" stroke="#8962F8" strokeWidth="2.6" strokeLinecap="round" />
    <rect x="5" y="25" width="18" height="18" rx="3.5" fill="#8962F8" />
    <rect x="25" y="25" width="18" height="18" rx="3.5" fill="#8962F8" />
  </svg>
);

export const ExtractPagesIcon = ({ size = 48, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <rect x="3" y="9" width="17" height="17" rx="3.5" fill="rgb(184, 161, 251)" />
    <rect x="3" y="28" width="17" height="17" rx="3.5" fill="rgb(184, 161, 251)" />
    <rect x="22" y="28" width="17" height="17" rx="3.5" fill="rgb(184, 161, 251)" />
    <rect x="22" y="9" width="17" height="17" rx="3.5" fill="none" stroke="rgb(184, 161, 251)" strokeWidth="1.6" strokeDasharray="3 2.5" />
    <rect x="26.5" y="2.5" width="19" height="19" rx="3.5" stroke="#FFFFFF" strokeWidth="3" />
    <rect x="26.5" y="2.5" width="19" height="19" rx="3.5" fill="#8962F8" />
    <path d="M 32 16 L 40 8 M 34.5 8 H 40 V 13.5" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const OrganizePdfIcon = ({ size = 48, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <rect x="5" y="5" width="18" height="18" rx="3.5" fill="#8962F8" />
    <text x="14" y="18.3" textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight="800" fontFamily="Inter, -apple-system, sans-serif">2</text>
    <rect x="25" y="5" width="18" height="18" rx="3.5" fill="#8962F8" />
    <text x="34" y="18.3" textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight="800" fontFamily="Inter, -apple-system, sans-serif">1</text>
    <rect x="5" y="25" width="18" height="18" rx="3.5" fill="rgb(184, 161, 251)" />
    <text x="14" y="38.3" textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight="800" fontFamily="Inter, -apple-system, sans-serif">3</text>
    <rect x="25" y="25" width="18" height="18" rx="3.5" fill="rgb(184, 161, 251)" />
    <text x="34" y="38.3" textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight="800" fontFamily="Inter, -apple-system, sans-serif">4</text>
  </svg>
);

export const PdfToWordIcon = ({ size = 48, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M 5.5 12.5 H 24.5 L 32.5 20.5 V 42.5 Q 32.5 46.5 28.5 46.5 H 5.5 Q 1.5 46.5 1.5 42.5 V 16.5 Q 1.5 12.5 5.5 12.5 Z" fill="#E3E6EA" />
    <g fill="#AEB5BF">
      <rect x="4.5" y="30" width="10" height="2.6" rx="1.3" />
      <rect x="4.5" y="35" width="10" height="2.6" rx="1.3" />
      <rect x="4.5" y="40" width="16" height="2.6" rx="1.3" />
    </g>
    <path d="M 20 1.5 H 38.5 L 46.5 9.5 V 32.5 Q 46.5 36.5 42.5 36.5 H 20 Q 16 36.5 16 32.5 V 5.5 Q 16 1.5 20 1.5 Z" stroke="#FFFFFF" strokeWidth="3" />
    <path d="M 20 1.5 H 38.5 L 46.5 9.5 V 32.5 Q 46.5 36.5 42.5 36.5 H 20 Q 16 36.5 16 32.5 V 5.5 Q 16 1.5 20 1.5 Z" fill="#3D99F5" />
    <path d="M 38.5 1.5 V 7.5 Q 38.5 9.5 40.5 9.5 H 46.5 Z" fill="#FFFFFF" opacity="0.45" />
    <text x="31.25" y="25.12" textAnchor="middle" fill="#FFFFFF" fontSize="17" fontWeight="800" fontFamily="Inter, -apple-system, sans-serif">W</text>
  </svg>
);

export const ImagesToPdfIcon = ({ size = 48, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M 5.5 12.5 H 24.5 L 32.5 20.5 V 42.5 Q 32.5 46.5 28.5 46.5 H 5.5 Q 1.5 46.5 1.5 42.5 V 16.5 Q 1.5 12.5 5.5 12.5 Z" fill="#E3E6EA" />
    <g fill="#AEB5BF">
      <circle cx="12" cy="31.5" r="2.2" />
      <path d="M 3.5 43 L 9 35 L 13 39.5 L 15.5 37 L 22 43 Z" />
    </g>
    <path d="M 20 1.5 H 38.5 L 46.5 9.5 V 32.5 Q 46.5 36.5 42.5 36.5 H 20 Q 16 36.5 16 32.5 V 5.5 Q 16 1.5 20 1.5 Z" stroke="#FFFFFF" strokeWidth="3" />
    <path d="M 20 1.5 H 38.5 L 46.5 9.5 V 32.5 Q 46.5 36.5 42.5 36.5 H 20 Q 16 36.5 16 32.5 V 5.5 Q 16 1.5 20 1.5 Z" fill="#FB212F" />
    <path d="M 38.5 1.5 V 7.5 Q 38.5 9.5 40.5 9.5 H 46.5 Z" fill="#FFFFFF" opacity="0.45" />
    <text x="31.25" y="22.42" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="800" fontFamily="Inter, -apple-system, sans-serif">PDF</text>
  </svg>
);

export const PdfToImagesIcon = ({ size = 48, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M 5.5 12.5 H 24.5 L 32.5 20.5 V 42.5 Q 32.5 46.5 28.5 46.5 H 5.5 Q 1.5 46.5 1.5 42.5 V 16.5 Q 1.5 12.5 5.5 12.5 Z" fill="#E3E6EA" />
    <g fill="#AEB5BF">
      <rect x="4.5" y="30" width="10" height="2.6" rx="1.3" />
      <rect x="4.5" y="35" width="10" height="2.6" rx="1.3" />
      <rect x="4.5" y="40" width="16" height="2.6" rx="1.3" />
    </g>
    <path d="M 20 1.5 H 38.5 L 46.5 9.5 V 32.5 Q 46.5 36.5 42.5 36.5 H 20 Q 16 36.5 16 32.5 V 5.5 Q 16 1.5 20 1.5 Z" stroke="#FFFFFF" strokeWidth="3" />
    <path d="M 20 1.5 H 38.5 L 46.5 9.5 V 32.5 Q 46.5 36.5 42.5 36.5 H 20 Q 16 36.5 16 32.5 V 5.5 Q 16 1.5 20 1.5 Z" fill="#FFB700" />
    <path d="M 38.5 1.5 V 7.5 Q 38.5 9.5 40.5 9.5 H 46.5 Z" fill="#FFFFFF" opacity="0.45" />
    <circle cx="38" cy="13" r="3" fill="#FFFFFF" />
    <path d="M 21.5 30 L 27.5 20.5 L 31.5 25 L 34.5 22 L 42 30 Z" fill="#FFFFFF" />
  </svg>
);

export const RotatePdfIcon = ({ size = 48, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M 6 6 H 22 L 30 14 V 40 Q 30 44 26 44 H 6 Q 2 44 2 40 V 10 Q 2 6 6 6 Z" fill="rgb(184, 161, 251)" />
    <g transform="rotate(14 31 24)">
      <path d="M 21 4 H 37 L 45 12 V 38 Q 45 42 41 42 H 21 Q 17 42 17 38 V 8 Q 17 4 21 4 Z" stroke="#FFFFFF" strokeWidth="3" />
      <path d="M 21 4 H 37 L 45 12 V 38 Q 45 42 41 42 H 21 Q 17 42 17 38 V 8 Q 17 4 21 4 Z" fill="#8962F8" />
    </g>
    <g stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M 37.5 27 A 7 7 0 1 1 34 18.5" />
      <path d="M 33 15 L 34.5 18.8 L 30.6 19.8" />
    </g>
  </svg>
);

export const AddWatermarkIcon = ({ size = 48, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M 10 3.5 H 34 L 42 11.5 V 40.5 Q 42 44.5 38 44.5 H 10 Q 6 44.5 6 40.5 V 7.5 Q 6 3.5 10 3.5 Z" fill="rgb(111, 217, 220)" />
    <path d="M 34 3.5 V 9.5 Q 34 11.5 36 11.5 H 42 Z" fill="#FFFFFF" opacity="0.45" />
    <path d="M 6 27 L 6 37 L 42 24 L 42 14 Z" fill="#0FC0C5" />
  </svg>
);

export const RemoveWatermarkIcon = ({ size = 48, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M 10 3.5 H 34 L 42 11.5 V 40.5 Q 42 44.5 38 44.5 H 10 Q 6 44.5 6 40.5 V 7.5 Q 6 3.5 10 3.5 Z" fill="rgb(111, 217, 220)" />
    <path d="M 34 3.5 V 9.5 Q 34 11.5 36 11.5 H 42 Z" fill="#FFFFFF" opacity="0.45" />
    <path d="M 6 27 L 42 14 M 6 37 L 42 24" stroke="#0FC0C5" strokeWidth="2.2" strokeDasharray="3.5 3" strokeLinecap="round" />
  </svg>
);

export const CropPdfIcon = ({ size = 48, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M 10 3.5 H 34 L 42 11.5 V 40.5 Q 42 44.5 38 44.5 H 10 Q 6 44.5 6 40.5 V 7.5 Q 6 3.5 10 3.5 Z" fill="rgb(184, 161, 251)" />
    <rect x="13" y="13" width="22" height="22" rx="2" fill="#8962F8" />
    <g stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" fill="none">
      <path d="M 17 22 V 17 H 22 M 26 17 H 31 V 22 M 31 26 V 31 H 26 M 22 31 H 17 V 26" />
    </g>
  </svg>
);

export const ProtectPdfIcon = ({ size = 48, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M 5.5 1.5 H 23.5 L 31.5 9.5 V 37.5 Q 31.5 41.5 27.5 41.5 H 5.5 Q 1.5 41.5 1.5 37.5 V 5.5 Q 1.5 1.5 5.5 1.5 Z" fill="rgb(247, 130, 167)" />
    <path d="M 24 23 V 16 A 7 7 0 0 1 38 16 V 23" stroke="#F12E6D" strokeWidth="4" strokeLinecap="round" fill="none" />
    <rect x="17" y="21" width="28" height="24" rx="5" stroke="#FFFFFF" strokeWidth="3" />
    <rect x="17" y="21" width="28" height="24" rx="5" fill="#F12E6D" />
    <circle cx="31" cy="31" r="3" fill="#FFFFFF" />
    <rect x="29.75" y="31" width="2.5" height="7" rx="1.25" fill="#FFFFFF" />
  </svg>
);

export const EditPdfIcon = ({ size = 48, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M 5.5 12.5 H 24.5 L 32.5 20.5 V 42.5 Q 32.5 46.5 28.5 46.5 H 5.5 Q 1.5 46.5 1.5 42.5 V 16.5 Q 1.5 12.5 5.5 12.5 Z" fill="rgb(247, 131, 131)" />
    <path d="M 20 1.5 H 38.5 L 46.5 9.5 V 32.5 Q 46.5 36.5 42.5 36.5 H 20 Q 16 36.5 16 32.5 V 5.5 Q 16 1.5 20 1.5 Z" stroke="#FFFFFF" strokeWidth="3" />
    <path d="M 20 1.5 H 38.5 L 46.5 9.5 V 32.5 Q 46.5 36.5 42.5 36.5 H 20 Q 16 36.5 16 32.5 V 5.5 Q 16 1.5 20 1.5 Z" fill="#F23030" />
    <path d="M 38.5 1.5 V 7.5 Q 38.5 9.5 40.5 9.5 H 46.5 Z" fill="#FFFFFF" opacity="0.45" />
    <g transform="translate(31.25 19) scale(0.85) translate(-30.5 -22.5)">
      <g stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" fill="none">
        <path d="M 21 17 V 13 H 25 M 36 13 H 40 V 17 M 40 30 V 34 H 36 M 25 34 H 21 V 30" />
      </g>
      <text x="30.5" y="29" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="800" fontFamily="Inter, -apple-system, sans-serif">T</text>
    </g>
  </svg>
);

export const PageNumbersIcon = ({ size = 48, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M 10 3.5 H 34 L 42 11.5 V 40.5 Q 42 44.5 38 44.5 H 10 Q 6 44.5 6 40.5 V 7.5 Q 6 3.5 10 3.5 Z" fill="rgb(184, 161, 251)" />
    <path d="M 34 3.5 V 9.5 Q 34 11.5 36 11.5 H 42 Z" fill="#FFFFFF" opacity="0.45" />
    <g fill="#AEB5BF">
      <rect x="12" y="15" width="16" height="2.6" rx="1.3" />
      <rect x="12" y="20" width="24" height="2.6" rx="1.3" />
      <rect x="12" y="25" width="20" height="2.6" rx="1.3" />
    </g>
    <rect x="22" y="31" width="16" height="10" rx="3" fill="#8962F8" />
    <text x="30" y="38.5" textAnchor="middle" fill="#FFFFFF" fontSize="6.5" fontWeight="800" fontFamily="Inter, -apple-system, sans-serif">1 2 3</text>
  </svg>
);

export const RedactPdfIcon = ({ size = 48, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M 10 3.5 H 34 L 42 11.5 V 40.5 Q 42 44.5 38 44.5 H 10 Q 6 44.5 6 40.5 V 7.5 Q 6 3.5 10 3.5 Z" fill="rgb(247, 130, 167)" />
    <path d="M 34 3.5 V 9.5 Q 34 11.5 36 11.5 H 42 Z" fill="#FFFFFF" opacity="0.45" />
    <g fill="#F12E6D">
      <rect x="12" y="16" width="24" height="7" rx="2" />
      <rect x="12" y="26" width="16" height="7" rx="2" />
    </g>
    <g fill="#1E293B">
      <rect x="14" y="18.5" width="20" height="2" rx="1" />
      <rect x="14" y="28.5" width="12" height="2" rx="1" />
    </g>
  </svg>
);

