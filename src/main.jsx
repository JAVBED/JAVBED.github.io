import React from "react";
import {createRoot} from "react-dom/client";
import "./style.css";
import logo from "./assets/javbed-logo.png";

const engines=[
  ["JAVLI","Java Edition","Microsoft accounts, releases, snapshots, historical builds, instances, loaders, mods and modpacks.","https://github.com/JAVBED/javli"],
  ["BEDLI","Bedrock Edition","Release, beta and preview builds powered by the BEDLI backend.","https://github.com/JAVBED/bedli"],
  ["EDULI","Minecraft Education","Classic MinecraftEdu builds with managed local versions.","https://github.com/JAVBED/eduli"],
  ["LEGLI","Legacy Console Edition","Legacy Console Edition tooling and launch support.","https://github.com/JAVBED/legli"],
  ["SERVLI","Servers","Java + Bedrock servers, backups, properties, console commands, plugins, mods, Geyser, Floodgate and historical BDS.","https://github.com/JAVBED/servli"]
];

const features=[
  ["Accounts","Microsoft account login, switching, refresh and removal through JAVLI."],
  ["Instances","Create, launch, clone and import isolated Java instances with loaders."],
  ["Mods + Modpacks","Modrinth and CurseForge mod workflows plus Modrinth modpack installation."],
  ["Servers","Create and manage Vanilla, Paper, Purpur, Fabric, Quilt, Forge, NeoForge, BDS, PocketMine and PowerNukkitX."],
  ["Historical BDS","Browse and install historical Bedrock Dedicated Server versions from the Bedrock-OSS catalog."],
  ["Settings","Configure RAM, resolution, fullscreen, Java runtime, engine paths, CurseForge key and launcher behavior."],
  ["Engine updates","Use installed PATH commands or JAVBED-managed engine binaries and update them from GitHub Releases."],
  ["More Minecraft","Launch Dungeons, Dungeons II and Legends from the same desktop shell when installed."]
];

const Arrow=()=> <span>↗</span>;

function App(){
  return <>
    <nav>
      <div className="shell nav">
        <a className="logo" href="#top"><b>JAV</b>BED</a>
        <div className="links">
          <a href="#launcher">Launcher</a>
          <a href="#features">Features</a>
          <a href="#engines">Engines</a>
          <a href="https://github.com/JAVBED">GitHub ↗</a>
        </div>
      </div>
    </nav>

    <main id="top">
      <header className="shell hero">
        <div className="heroCopy">
          <img className="heroLogo" src={logo} alt="JAVBED logo"/>
          <div className="label">UNOFFICIAL OPEN-SOURCE MINECRAFT FAN LAUNCHER</div>
          <h1>One launcher.<br/><em>Every edition.</em></h1>
          <p>JAVBED brings Java, Bedrock, Education, Legacy Console, Dungeons, Legends and Minecraft servers into one desktop launcher powered by the JAVBED toolchain.</p>
          <div className="actions">
            <a className="btn primary big" href="https://github.com/JAVBED/javbed/releases">Download JAVBED <Arrow/></a>
            <a className="btn secondary big" href="https://github.com/JAVBED/javbed">View source <Arrow/></a>
          </div>
        </div>

        <div className="launcherMock" aria-label="JAVBED Launcher preview">
          <aside>
            <strong>JAVBED</strong>
            <small>Universal Minecraft launcher</small>
            {["JAVA","BEDROCK","EDU","LCE","DUNGEONS","DUNGEONS II","LEGENDS","SERVERS"].map((x,i)=><div className={i===0?"active":""} key={x}>{x}</div>)}
          </aside>
          <section className="mockMain">
            <div className="mockTabs"><b>Play</b><span>Instances</span><span>Mods</span><span>Modpacks</span><span>Accounts</span></div>
            <div className="mockHero">
              <div className="grass"/>
              <div className="mockLogo">MINECRAFT<br/><strong>JAVA EDITION</strong></div>
            </div>
            <div className="mockPlay">
              <div><small>VERSION</small><strong>Latest release</strong></div>
              <button>PLAY</button>
            </div>
          </section>
        </div>
      </header>

      <section id="launcher">
        <div className="shell split">
          <div>
            <div className="label">THE LAUNCHER</div>
            <h2>Built for players.<br/><em>Powered by tools.</em></h2>
          </div>
          <p>JAVBED is the graphical layer over JAVLI, BEDLI, EDULI, LEGLI and SERVLI. If an engine is already installed on PATH, JAVBED can use it. Otherwise it can manage its own copy from GitHub Releases.</p>
        </div>
      </section>

      <section id="features">
        <div className="shell">
          <div className="label">FEATURES</div>
          <div className="sectionHead">
            <h2>A real launcher,<br/>not a CLI wrapper.</h2>
            <p>Accounts, instances, mods, modpacks, server management, updates and settings are surfaced directly in the desktop UI.</p>
          </div>
          <div className="featureGrid">
            {features.map(([name,desc])=><article className="feature" key={name}><span>◆</span><h3>{name}</h3><p>{desc}</p></article>)}
          </div>
        </div>
      </section>

      <section id="engines">
        <div className="shell">
          <div className="label">UNDER THE HOOD</div>
          <div className="sectionHead">
            <h2>Five engines.<br/><em>One desktop.</em></h2>
            <p>The CLI projects remain independently usable. JAVBED simply gives them a unified graphical home.</p>
          </div>
          <div className="engineGrid">
            {engines.map(([name,edition,desc,url])=><article className="engine" key={name}>
              <div><span>{edition}</span><h3>{name}</h3><p>{desc}</p></div>
              <a href={url}>GitHub <Arrow/></a>
            </article>)}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="shell ctaInner">
          <div><div className="label">GET JAVBED</div><h2>Download. Launch.<br/><em>Pick your edition.</em></h2></div>
          <div className="actions">
            <a className="btn primary big" href="https://github.com/JAVBED/javbed/releases">Latest release <Arrow/></a>
            <a className="btn secondary big" href="https://github.com/JAVBED/javbed">Source code <Arrow/></a>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div className="shell foot">
        <div className="logo"><b>JAV</b>BED</div>
        <p>Unofficial open-source Minecraft fan launcher. Not affiliated with Mojang Studios or Microsoft.</p>
        <a href="https://github.com/JAVBED">github.com/JAVBED ↗</a>
      </div>
    </footer>
  </>;
}

createRoot(document.getElementById("root")).render(<App/>);
