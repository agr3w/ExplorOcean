import React from 'react';
import { motion } from 'framer-motion';
import FastFactsSection from './BodyComponents/FastFactsSection/FastFactsSection';
import CastAndCrewSection from './BodyComponents/CastAndCrewSection/CastAndCrewSection';
import DescriptionSection from './BodyComponents/DescriptionSection/DescriptionSection';
import TopicsSection from './BodyComponents/TopicsSection/TopicsSection';
import GallerySection from './BodyComponents/GallerySection/GallerySection';
import LocationSection from './BodyComponents/LocationSection/LocationSection';

export default function DetailPageBody({ item }) {
  const isDocumentary = item.videoUrl;
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      {isDocumentary && (
        <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
          <FastFactsSection item={item} />
        </motion.div>
      )}

      {isDocumentary && item.castAndCrew && <CastAndCrewSection castAndCrew={item.castAndCrew} />}

      <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
        <DescriptionSection longDescription={item.longDescription} />
      </motion.div>

      <TopicsSection details={item.details} />

      <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
        <GallerySection secondaryImages={item.secondaryImages} />
      </motion.div>

      <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
        <LocationSection location={item.location} />
      </motion.div>
    </>
  );
}