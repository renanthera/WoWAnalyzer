import * as React from 'react';

type Props = Omit<React.ComponentPropsWithoutRef<'svg'>, 'xmlns' | 'viewBox' | 'className'>;

// https://thenounproject.com/term/checklist/437165/
// Checklist by David from the Noun Project
const Icon = (props: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="icon" {...props}>
    <path d="M37.434,25.406H92.54c1.354,0,2.46-1.103,2.46-2.459c0-1.356-1.104-2.46-2.46-2.46H37.434c-1.356,0-2.459,1.104-2.459,2.46  C34.975,24.303,36.078,25.406,37.434,25.406z" />
    <path d="M11.18,28.335c0.748,1.036,1.853,1.631,3.031,1.631l0.127-0.002c1.226-0.044,2.331-0.719,3.03-1.853l10.027-16.233  c0.71-1.153,0.352-2.671-0.801-3.384c-0.39-0.241-0.836-0.368-1.292-0.368c-0.86,0-1.644,0.437-2.094,1.168L14.12,24.003  l-4.666-6.46c-0.764-1.059-2.369-1.323-3.433-0.555c-0.533,0.384-0.884,0.954-0.989,1.602c-0.105,0.649,0.049,1.3,0.434,1.832  L11.18,28.335z" />
    <path d="M92.54,51.441H37.434c-1.356,0-2.459,1.104-2.459,2.459c0,1.356,1.103,2.461,2.459,2.461H92.54  c1.354,0,2.46-1.104,2.46-2.461C95,52.545,93.896,51.441,92.54,51.441z" />
    <path d="M26.593,39.449c-0.389-0.24-0.835-0.368-1.291-0.368c-0.86,0-1.644,0.438-2.094,1.168L14.12,54.957l-4.666-6.46  c-0.764-1.06-2.369-1.323-3.433-0.555c-0.533,0.384-0.884,0.954-0.989,1.602c-0.105,0.649,0.049,1.3,0.434,1.832l5.715,7.913  c0.748,1.036,1.852,1.631,3.03,1.631l0.126-0.002c1.228-0.044,2.332-0.719,3.032-1.854l10.026-16.231  C28.106,41.68,27.747,40.161,26.593,39.449z" />
    <path d="M92.54,82.396H37.434c-1.356,0-2.459,1.104-2.459,2.459c0,1.356,1.103,2.461,2.459,2.461H92.54  c1.354,0,2.46-1.104,2.46-2.461C95,83.5,93.896,82.396,92.54,82.396z" />
    <path d="M26.593,70.402c-0.389-0.239-0.835-0.367-1.291-0.367c-0.86,0-1.644,0.438-2.094,1.168L14.12,85.911l-4.666-6.46  c-0.765-1.061-2.371-1.321-3.433-0.555C5.488,79.281,5.136,79.85,5.032,80.5c-0.105,0.646,0.049,1.298,0.434,1.83l5.715,7.913  c0.748,1.036,1.852,1.631,3.03,1.631l0.127-0.002c1.226-0.044,2.331-0.72,3.03-1.851l10.027-16.234  C28.106,72.634,27.747,71.115,26.593,70.402z" />
  </svg>
);

export default Icon;
