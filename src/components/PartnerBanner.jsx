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
              title={`${partner.name} (${partner.category}) 새 창 열기`}
            >
              <span>{partner.name}</span>
              <ExternalLink size={13} style={{ opacity: 0.6 }} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
