import React from 'react';
import AnimationCard from '../../components/subComponents/AnimationCard';
import FAQ from '../../components/subComponents/FAQ';
import tv from '../../assets/tv.png';
import mobile from '../../assets/mobile.jpg';
import devicePile from '../../assets/device-pile-in.png';
import child from '../../assets/children.png';
import videoTv from '../../assets/video-tv.mp4';
import videoDevicePile from '../../assets/video-tv2.mp4';
import downloadIcon from '../../assets/download-icon.gif';

const MainBody = () => {
  return (
    <div className="main-content">
      <section className="enjoy-on-tv-section">
        <AnimationCard
          title="Enjoy on your TV."
          subtitle="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
          image={tv}
          imageAlt="tv"
          videoTv={videoTv}
        />
      </section>
      <section className="download-your-shows-section">
        <AnimationCard
          title="Download your shows to watch offline."
          subtitle="Save your favourites easily and always have something to watch."
          image={mobile}
          imageAlt="mobile"
          downloadIcon={downloadIcon}
        />
      </section>
      <section className="watch-everywhere-section">
        <AnimationCard
          title="Watch everywhere."
          subtitle="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          image={devicePile}
          imageAlt="device pile in"
          videoDevicePile={videoDevicePile}
        />
      </section>
      <section className="children-section">
        <AnimationCard
          title="Create profiles for children."
          subtitle="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
          image={child}
          imageAlt="children"
        />
      </section>
      <section className="faq-section">
        <FAQ />
      </section>
    </div>
  );
};

export default MainBody;
