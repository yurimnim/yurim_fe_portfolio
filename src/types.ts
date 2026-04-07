export type ProjectContents = {
    imageList?: string[];
    imageFit?: 'contain' | 'cover';
    imagePosition?: string;
    placeholderLabel?: string;
    title: string;
    subtitle: string;
    description: string;
    techStack?: string[];
    url?: string[];
};
