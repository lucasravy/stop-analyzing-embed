import React, { Suspense } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Card from '../components/Card';
import ProgressBar from '../components/ProgressBar/ProgressBar';

import TimerComponent from '../components/TimerComponent/TimerComponent';

const H3 = styled.h3`
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: 700;
  color: #2e2a27;
`;

function ChoiceBoard() {
  const { t } = useTranslation();

  return (
    <Suspense fallback="loading">
      <section className="container">
        <div className="row vh-100">
          <div className="col-12 my-auto">
            <div className="row text-center">
              <div className="col-lg-12 mb-4">
                <H3>
                  {t('Which one would you like to choose?')}{' '}
                  <TimerComponent timeout={15} />
                </H3>
                <div className="col-lg-12 mb-4">
                  <ProgressBar progress={20} />
                  <ProgressBar progress={50} />
                </div>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-lg-6 mb-4">
                <Card
                  title={t('Choice 1')}
                  paragraph={t("That's a good choice!")}
                  imageURL="https://images.unsplash.com/photo-1565995240383-ed5204015aee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2160&q=80"
                />
              </div>
              <div className="col-lg-6 mb-4">
                <Card
                  title={t('Choice 2')}
                  paragraph={t("Nope, that's a good choice!")}
                  imageURL="https://picsum.photos/seed/x2/200/300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
}

export default ChoiceBoard;
