import type { ReactNode } from "react";

export interface AnimalCardProps {
    name: string;
    species?: string;
    imgSrc: string;
    children?: ReactNode;
}
