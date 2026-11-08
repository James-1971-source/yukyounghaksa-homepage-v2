import React from 'react';
import { PARTNER_LINKS } from '../data/siteData';
import { ExternalLink } from 'lucide-react';

export default function PartnerBanner() {
  const repeatedLinks = [...PARTNER_LINKS, ...PARTNER_LINKS];

  return (
    <section className="partner-slider-section" aria-label="유관기관 배너 모음">
      <div className="partner-slider-wrap">
        <div className="partner-track">
          {repeatedLinks.map((partner, idx) => (
            <a
              key={`${partner.name}-${idx}`}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-item"
              title={`${partner.name} (${partner.logoText}) 새 창 열기`}
            >
              {partner.logo && (
                <span className="partner-logo-box">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} 로고`}
                    className="partner-logo-img"
                    loading="lazy"
                  />
                </span>
              )}
              <span className="partner-text-box">
                <strong className="partner-name">{partner.name}</strong>
                <small className="partner-sub">{partner.logoText}</small>
              </span>
              <ExternalLink size={13} className="partner-ext-icon" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
