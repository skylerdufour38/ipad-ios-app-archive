const apps = [
  {
    name: 'Animal Sounds',
    bundleId: 'com.smartbabyapps.animalsounds',
    version: '2.0',
    platform: 'iOS',
    minimumOs: 'iOS 3.1',
    ipaFile: 'Animal Sounds 2.0.ipa',
    fileSize: '19.8 MB',
    bundlePath: 'Payload/Animal Sounds.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'SoundTouch',
    bundleId: 'com.yourcompany.SoundTouch',
    version: '1.4',
    platform: 'iOS',
    minimumOs: 'iOS 3.0',
    ipaFile: 'SoundTouch 1.4.ipa',
    fileSize: '155.5 MB',
    bundlePath: 'Payload/SoundTouch.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Tozzle',
    bundleId: 'com.nodeflexion.Tozzle',
    version: '3.7',
    platform: 'iOS',
    minimumOs: 'iOS 3.1.3',
    ipaFile: 'Tozzle 3.7.ipa',
    fileSize: '112.6 MB',
    bundlePath: 'Payload/Tozzle.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'AutismXpress',
    bundleId: 'X7WS995LSR.com.StudioEmotion.AutismXpress',
    version: '1.0',
    platform: 'iOS',
    minimumOs: 'iOS 3.1.2',
    ipaFile: 'AutismXpress 1.0.ipa',
    fileSize: '7.4 MB',
    bundlePath: 'Payload/AutismXpress.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Lunchbox',
    bundleId: 'com.thup.MonkeyPreschool',
    version: '1.4',
    platform: 'iOS',
    minimumOs: 'iOS 3.0',
    ipaFile: 'Lunchbox 1.4.ipa',
    fileSize: '13.7 MB',
    bundlePath: 'Payload/Lunchbox.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Peek-a-Zoo',
    bundleId: 'com.duckduckmoosedesign.peekazoo',
    version: '1.1.1',
    platform: 'iOS',
    minimumOs: 'iOS 3.0',
    ipaFile: 'Peek-a-Zoo 1.1.1.ipa',
    fileSize: '19.1 MB',
    bundlePath: 'Payload/Peek-a-Zoo.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Michigan Nature Sounds',
    bundleId: 'com.yourcompany.MichiganNatureSounds',
    version: '1.0',
    platform: 'iOS',
    minimumOs: 'iOS 3.0',
    ipaFile: 'Michigan Nature Sounds 1.0.ipa',
    fileSize: '24.6 MB',
    bundlePath: 'Payload/Michigan Nature Sounds.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Peek-a-Zoo',
    bundleId: 'com.tbd.pazCLL',
    version: '1.0',
    platform: 'iOS',
    minimumOs: 'iOS 3.0',
    ipaFile: 'Peek-a-Zoo 1.0.ipa',
    fileSize: '24.6 MB',
    bundlePath: 'Payload/Peek-a-Zoo.app',
    archiveType: 'App Store Package',
    variant: 'Alternate Build'
  },
  {
    name: 'Artsee',
    bundleId: 'com.britejar.artsee',
    version: '1.1',
    platform: 'iOS',
    minimumOs: 'iOS 2.2',
    ipaFile: 'Artsee 1.1.ipa',
    fileSize: '12.4 MB',
    bundlePath: 'Payload/Artsee.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Angry Birds',
    bundleId: 'com.rovio.AngryBirdsHalloween',
    version: '1.5.3',
    platform: 'iOS',
    minimumOs: 'iOS 3.0',
    ipaFile: 'Angry Birds 1.5.3.ipa',
    fileSize: '16.8 MB',
    bundlePath: 'Payload/Angry Birds.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Farm Flip Fun',
    bundleId: 'lv.yapp.farmflipfun',
    version: '1.0',
    platform: 'iOS',
    minimumOs: 'iOS 3.0',
    ipaFile: 'Farm Flip Fun 1.0.ipa',
    fileSize: '10.6 MB',
    bundlePath: 'Payload/Farm Flip Fun.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Farm Story',
    bundleId: 'com.teamlava.farmstory',
    version: '1.2',
    platform: 'iOS',
    minimumOs: 'iOS 3.0',
    ipaFile: 'Farm Story 1.2.ipa',
    fileSize: '19.9 MB',
    bundlePath: 'Payload/Farm Story.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Stickers',
    bundleId: 'com.nightanddaystudios.ericcarlestickers',
    version: '1.0',
    platform: 'iOS',
    minimumOs: 'iOS 5.0',
    ipaFile: 'Stickers 1.0.ipa',
    fileSize: '206.1 MB',
    bundlePath: 'Payload/Stickers.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Forest',
    bundleId: 'com.nightanddaystudios.peekabooforest',
    version: '1.1.0',
    platform: 'iOS',
    minimumOs: 'iOS 3.1.3',
    ipaFile: 'Forest 1.1.0.ipa',
    fileSize: '25.6 MB',
    bundlePath: 'Payload/Forest.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Virtuoso',
    bundleId: 'com.peterb.virtuosopianofree',
    version: '3.1.2',
    platform: 'iOS',
    minimumOs: 'iOS 4.0',
    ipaFile: 'Virtuoso 3.1.2.ipa',
    fileSize: '19.9 MB',
    bundlePath: 'Payload/Virtuoso.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'ABC Tracer',
    bundleId: 'com.appzoo.ABCTracer',
    version: '1.8',
    platform: 'iOS',
    minimumOs: 'iOS 2.2.1',
    ipaFile: 'ABC Tracer 1.8.ipa',
    fileSize: '20.9 MB',
    bundlePath: 'Payload/ABC Tracer.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Peek Wild',
    bundleId: 'com.nightanddaystudios.peekaboowild',
    version: '2.0.1',
    platform: 'iOS',
    minimumOs: 'iOS 3.1.3',
    ipaFile: 'Peek Wild 2.0.1.ipa',
    fileSize: '9.8 MB',
    bundlePath: 'Payload/Peek Wild.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Peekaboo',
    bundleId: 'com.nightanddaystudios.peekaboobarn',
    version: '2.0',
    platform: 'iOS',
    minimumOs: 'iOS 2.2',
    ipaFile: 'Peekaboo 2.0.ipa',
    fileSize: '3.6 MB',
    bundlePath: 'Payload/Peekaboo.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Finding Sight',
    bundleId: 'my.finding3',
    version: '2.1',
    platform: 'iOS',
    minimumOs: 'iOS 3.2',
    ipaFile: 'Finding Sight 2.1.ipa',
    fileSize: '34 MB',
    bundlePath: 'Payload/Finding Sight.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'ArtikPix',
    bundleId: 'com.rinnapps.artikpix.iap',
    version: '1.2.4',
    platform: 'iOS',
    minimumOs: 'iOS 3.1',
    ipaFile: 'ArtikPix 1.2.4.ipa',
    fileSize: '41.4 MB',
    bundlePath: 'Payload/ArtikPix.app',
    archiveType: 'App Store Package'
  }
];

const appGrid = document.getElementById('app-grid');

if (appGrid) {
  appGrid.innerHTML = apps.map((app) => {
    const variant = app.variant ? `<p><strong>Variant:</strong> ${app.variant}</p>` : '';
    return `
      <article class="app-card">
        <h3>${app.name}</h3>
        <div class="app-meta">
          <p><strong>Bundle ID:</strong> ${app.bundleId}</p>
          <p><strong>Version:</strong> ${app.version}</p>
          <p><strong>Platform:</strong> ${app.platform}</p>
          <p><strong>Minimum OS:</strong> ${app.minimumOs}</p>
          <p><strong>IPA File:</strong> ${app.ipaFile}</p>
          <p><strong>File Size:</strong> ${app.fileSize}</p>
          <p><strong>App Bundle Path:</strong> ${app.bundlePath}</p>
          <p><strong>Archive Type:</strong> ${app.archiveType}</p>
          ${variant}
        </div>
        <a class="install-btn" href="${app.ipaFile ? `ipas/${encodeURIComponent(app.ipaFile)}` : '#'}" aria-label="Install ${app.name}">
          Install App
        </a>
      </article>
    `;
  }).join('');
}
