import { useTranslation } from 'react-i18next';

function TopLayout() {
    const { t, i18n } = useTranslation();
    return (
        <div className="top-layout">
          

          <div className='flex gap-4'>
          <button>{t('EXPLORE')}</button>
            <button>{t('OFFERS')}</button>
            <button>{t('HISTORY')}</button>
            <button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')}>
                {t('LANGUAGE')}
            </button>

          </div>



            <div className="top-layout flex space-x-4">
                <button className="hover:bg-gray-200 hover:text-blue-600 px-4 py-2 rounded">
                    {t('EXPLORE')}
                </button>
                <button className="hover:bg-gray-200 hover:text-blue-600 px-4 py-2 rounded">
                    {t('OFFERS')}
                </button>
                <button className="hover:bg-gray-200 hover:text-blue-600 px-4 py-2 rounded">
                    {t('HISTORY')}
                </button>
                <button className="hover:bg-gray-200 hover:text-blue-600 px-4 py-2 rounded">
                    {t('LANGUAGE')}
                </button>
            </div>

        </div>
    );
}

export default TopLayout