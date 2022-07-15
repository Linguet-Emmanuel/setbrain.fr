import React from 'react';
import BigTitle from '../components/big-title/big-title';
import {Model} from '../components/Model/Model';
import styles from './index.module.scss';
import Head from 'next/head';

export type HomeProps = {
  path: string;
};

export default function Index({}: HomeProps) {
  return (
    <div className={styles['Home']}>
      <Head>
        <title>Home</title>
      </Head>
      <Model model={'/tv.gltf'} size={{ height: '45%', width: '14.88%', z: -3 }} position={{left: '0', top: '40%'}} rotation={{x: -0.2, y: 0.2, z: 0}}></Model>
      <Model model={'/rocket.gltf'} size={{ height: '45%', width: '14.88%', z: -5 }} position={{left: '65%', top: '-15%'}} rotation={{x: -0.3, y: 0.2, z: 0.2}}></Model>
      <Model model={'/leaf.gltf'} size={{ height: '50.6%', width: '16.7%', z: -6.5 }} position={{left: '35%', top: '50%'}} rotation={{x: -0.5, y: -0.5, z: -0.8}}></Model>
      <Model model={'/lamp.gltf'} size={{ height: '50.6%', width: '16.7%', z: -6 }} position={{left: '75%', top: '40%'}} rotation={{x: -0.3, y: -0.2, z: -0.2}}></Model>
      <Model model={'/pc.gltf'} size={{ height: '45%', width: '14.88%', z: -3 }} position={{left: '10%', top: '-20%'}} rotation={{x: -0.2, y: 0.1, z: 0.3}}></Model>
      <BigTitle position='center' data-scroll-section>
        <h1>Set Brain</h1>
        <h1>
          <span>Créons l&#39;impossible</span>
        </h1>
      </BigTitle>
    </div>
  );
}

/*
*
* { height: '70%', width: '70%', z: -3 }} position={{left: '0', top: '50%'}} rotation={{x: -0.2, y: 0.2, z: 0}}></Model>
      <Model model={'/rocket.gltf'} size={{ heightAndWidth: '400px', z: -5 }} position={{left: '60%', top: '-10%'}} rotation={{x: -0.3, y: 0.2, z: 0.2}}></Model>
      <Model model={'/leaf.gltf'} size={{ heightAndWidth: '450px', z: -5 }} position={{left: '35%', top: '60%'}} rotation={{x: -0.5, y: -0.5, z: -0.8}}></Model>
      <Model model={'/lamp.gltf'} size={{ heightAndWidth: '450px', z: -6 }} position={{left: '75%', top: '50%'}} rotation={{x: -0.3, y: -0.2, z: -0.2}}></Model>
      <Model model={'/pc.gltf'} size={{ heightAndWidth: '400px', z: -3 }*/