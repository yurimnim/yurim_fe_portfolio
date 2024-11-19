import { useLocale } from '@/hooks/useLocale';
import { Suspense } from 'react';

const IntroSection = () => {
  const { t } = useLocale();

  return (
    <Suspense fallback={<div></div>}>
      <div className="relative w-screen h-screen">
        <h1>{t('intro.title')}</h1>
        <p>{t('intro.description')}</p>
      </div>
    </Suspense>
  )
}

export default IntroSection