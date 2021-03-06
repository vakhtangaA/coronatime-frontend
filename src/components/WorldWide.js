import React from 'react';
import { useTranslation } from 'react-i18next';

import newCasesImage from '../images/newCases.png';
import recoveredImage from '../images/recovered.png';
import deathImage from '../images/death.png';

function WorldWide({ statistics }) {
  const { t } = useTranslation();
  return (
    <div className='grid w-full grid-cols-3 gap-4 md:gap-4 2xl:gap-20'>
      <div className='flex flex-col items-center justify-between flex-1 col-span-3 rounded-lg md:col-span-1 span py-14 bg-bgNewCases'>
        <img src={newCasesImage} alt='New cases' />
        <div className='flex flex-col items-center justify-center'>
          <h3 className='mt-4 text-lg font-semibold xl:text-xl'>
            {t('New cases')}
          </h3>
          <h3 className='mt-4 text-3xl font-black text-blue-500 xl:text-4xl'>
            {Number(statistics.confirmed).toLocaleString()}
          </h3>
        </div>
      </div>
      <div className='grid grid-cols-2 col-span-3 gap-3 md:col-span-2 md:gap-4 2xl:gap-20'>
        <div className='flex flex-col items-center justify-between flex-1 col-span-1 rounded-lg py-14 bg-bgRecoveredCases'>
          <img src={recoveredImage} alt='Recovered' />
          <div className='flex flex-col items-center justify-center'>
            <h3 className="mt-4 text-lg font-semibold xl:text-xl {{ app()->getLocale() === 'ka' ? 'text-xs' : '' }}">
              {t('Recovered')}
            </h3>
            <h3 className='mt-4 text-3xl font-black text-green-500 xl:text-4xl'>
              {Number(statistics.recovered).toLocaleString()}
            </h3>
          </div>
        </div>
        <div className='flex flex-col items-center justify-between flex-1 col-span-1 rounded-lg py-14 bg-bgDeathCases'>
          <img src={deathImage} alt='Death cases' />
          <div className='flex flex-col items-center justify-center'>
            <h3 className="mt-4 text-lg font-semibold xl:text-xl {{ app()->getLocale() === 'ka' ? 'text-xs' : '' }}">
              {t('Deaths')}
            </h3>
            <h3 className='mt-4 text-3xl font-black text-yellow-500 xl:text-4xl'>
              {Number(statistics.deaths).toLocaleString()}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorldWide;
