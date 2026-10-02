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
  ["Home dashboard","Continue playing, recent sessions, detected games, account shortcut, quick launch and server status."],
  ["Java instances","Create, clone and export isolated instances with loader, memory and runtime preferences."],
  ["Mods and packs","Browse compatible mods, modpacks, resource packs and shaders from Modrinth; CurseForge where configured."],
  ["World Manager","Find Java worlds and accessible Bedrock or Education worlds; back up, restore, duplicate and export them."],
  ["Crash Doctor","Inspect recent Java logs and crash reports, then try a reversible mod-free Safe Mode launch."],
  ["Server dashboard","Use SERVLI for status, live console, properties, players, plugins, mods and scheduled backups."],
  ["Updates and Doctor","Review launcher and engine updates, tracked mod updates, downloads and launcher health checks."],
  ["Your setup","Use portable mode, change appearance and jump to actions with Ctrl+K."]
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
          <a href="#plugins">Plugins</a>
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
          <h1>Your Minecraft<br/><em>home base.</em></h1>
          <p>Launch and manage Java, Bedrock, Education, Legacy Console, Dungeons, Legends, Story Mode and servers from one open-source desktop app.</p>
          <div className="actions">
            <a className="btn primary big" href="https://github.com/JAVBED/javbed/releases">Download JAVBED <Arrow/></a>
            <a className="btn secondary big" href="https://github.com/JAVBED/javbed">View source <Arrow/></a>
          </div>
        </div>

        <div className="launcherMock" aria-label="JAVBED Launcher preview">
          <aside>
            <strong>JAVBED</strong>
            <small>Universal Minecraft launcher</small>
            {["HOME","JAVA","BEDROCK","EDU","LCE","STORY MODE","SERVERS","WORLDS"].map((x,i)=><div className={i===0?"active":""} key={x}>{x}</div>)}
          </aside>
          <section className="mockMain">
            <div className="mockTabs"><b>Home</b><span>Java</span><span>Worlds</span><span>Servers</span></div>
            <div className="mockDashboard">
              <div className="mockAccount"><small>ACTIVE ACCOUNT</small><strong>Player profile</strong><span>Switch or add account</span></div>
              <div className="mockContinue"><small>CONTINUE PLAYING</small><strong>Survival</strong><span>Java Edition · Fabric · 1.21.1</span><span className="mockPlayAction">PLAY</span></div>
              <div className="mockWide"><small>RECENTLY PLAYED</small><span>Survival &nbsp;·&nbsp; Bedrock &nbsp;·&nbsp; Story Mode</span></div>
              <div className="mockTile"><small>GAMES</small><strong>9 editions</strong></div>
              <div className="mockTile"><small>SERVERS</small><strong>Dashboard</strong></div>
            </div>
            <div className="mockPlay"><div><small>QUICK LAUNCH</small><strong>Java · Bedrock · Dungeons · Legends</strong></div><span>Ctrl+K to search</span></div>
          </section>
        </div>
      </header>

      <section id="launcher">
        <div className="shell split">
          <div>
            <div className="label">THE LAUNCHER</div>
            <h2>Play, manage,<br/><em>pick up where you left off.</em></h2>
          </div>
          <p>The PySide6 launcher uses JAVLI, BEDLI, EDULI, LEGLI and SERVLI for game and server work. Use an engine already on PATH or a path you choose, or let JAVBED install a managed copy.</p>
        </div>
      </section>

      <section id="features">
        <div className="shell">
          <div className="label">FEATURES</div>
          <div className="sectionHead">
            <h2>More than a<br/><em>Play button.</em></h2>
            <p>Move between games, Java instances, add-ons, worlds and servers in the same desktop UI. The command-line engines remain available on their own.</p>
          </div>
          <div className="featureGrid">
            {features.map(([name,desc])=><article className="feature" key={name}><span>◆</span><h3>{name}</h3><p>{desc}</p></article>)}
          </div>
        </div>
      </section>

      <section id="plugins">
        <div className="shell pluginSplit">
          <div>
            <div className="label">PLUGIN SYSTEM</div>
            <h2>Make JAVBED<br/><em>your own.</em></h2>
            <p>Extend JAVBED without modifying the launcher. Install a plugin package or directory, review its permissions, and manage each plugin from Settings. Plugin API 1 supports pages, commands, actions, events, file handlers, and namespaced settings.</p>
            <div className="actions">
              <a className="btn primary" href="https://github.com/JAVBED/javbed/blob/main/docs/plugins/README.md">Plugin developer guide <Arrow/></a>
              <a className="btn secondary" href="https://github.com/JAVBED/javbed/tree/main/examples/plugins/hello-javbed">Example plugin <Arrow/></a>
            </div>
          </div>
          <div className="pluginPanel">
            <div className="pluginPanelTop"><span>SETTINGS / PLUGINS</span><b>Plugin API 1</b></div>
            <div className="pluginPanelCard">
              <span className="pluginStatus">● Enabled</span>
              <h3>Hello JAVBED</h3>
              <p>Commands, a sidebar page, events, and settings in one small example.</p>
              <small>PERMISSIONS</small>
              <div className="pluginPills"><span>UI</span><span>Commands</span><span>Settings</span></div>
            </div>
            <p className="pluginCaution">Third-party Python plugins can execute code on your computer. Only install plugins you trust. Permissions limit JAVBED APIs; they are not an OS sandbox.</p>
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
