'use client';

import dynamic from 'next/dynamic';

const TeamSection = dynamic(() => import('./TeamSection'), { ssr: false });
export default TeamSection;
