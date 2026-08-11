import React from 'react';

export default function IndiaArrivalRegionRow({ region, index }) {
  const { number, region: regionTitle, gateways, description } = region;

  return (
    <article className="india-arrival-region-row" data-row-index={index}>
      <div className="india-arrival-row-header">
        <span className="india-arrival-row-number">{number}</span>
        <div className="india-arrival-row-titles">
          <h3 className="india-arrival-row-region">{regionTitle}</h3>
          <div className="india-arrival-gateways-list">
            {gateways.map((gw, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span className="india-gateway-dot">•</span>}
                <span className="india-gateway-item">
                  <span className="india-gateway-name">{gw.name}</span>
                  {gw.code && <span className="india-gateway-code">({gw.code})</span>}
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <p className="india-arrival-row-desc">{description}</p>
    </article>
  );
}
