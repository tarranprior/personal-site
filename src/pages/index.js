import React from "react";
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div class="container">
      <Layout>
        <main>
          <h1>Hey, I'm Tarran! 👋</h1>
          <p>I'm passionate about open source, solving problems and collaborative innovation.<br/>I also work with data a lot.</p>
          <h3>Currently:</h3>
          <ul>
            <li>👨‍💻 I'm an aspiring security engineer living in beautiful <b>Wiltshire, UK</b></li>
            <li>🏢 installing <b>secure and scalable IT infrastructure</b> for local businesses,</li>
            <li>🛠️ building <b>community-driven bots</b> @ <b><a href="https://discord.com/" target="_blank" rel="noreferrer">Discord</a></b> and some <b>OSINT tools</b>,</li>
            <li>💾 <b>preserving files</b> and discussing data with the good people @ <b><a href="https://old.reddit.com/r/DataHoarder" target="_blank" rel="noreferrer">r/DataHoarder</a></b>,</li>
            <li>🌱 learning <b>Go</b>, <b>Reverse Engineering</b> and <b>React Native Development</b>.</li>
          </ul>
        </main>
      </Layout>
    </div>
  )
};