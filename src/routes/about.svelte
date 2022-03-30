<svelte:head>
  <title>About • Tom Hendra's blog</title>
</svelte:head>

<div class="max-width-container">
  <main>
    <section class="header-section">
      <span class="heading-prefix">About</span>
      <h1>Hi, I'm Tom!</h1>
      <span class="subtitle">
        I'm a web developer from the UK, based in Salamanca, Spain.
      </span>
    </section>
    <section class="main-section">
      <p>
        In 2018 I quit my procurement job in the UK, sold everything I owned,
        and moved to Spain to become a freelance web developer. New country, new
        language, new career, new life.
      </p>
      <p>
        While bulding WordPress sites to pay the bills, I have been in pursuit
        of my chosen career trajectory ever since; as a professional Developer
        in the rich and vibrant JavaScript community.
      </p>
      <p>
        I have built this blog as a way to share my discoveries with the world
        while I'm focused on learning new things. At the moment I'm building
        with React and Svelte with Node.js next on the roadmap, so expect a
        bunch of JavaScript-centric content here.
      </p>
      <p>
        Personally, I am smitten with the Spanish food and culture, and don't
        miss the grey skies of England one bit! When not in front of a screen
        you'll find me enjoying tapas in a local bar, or at the gym burning
        calories accumulated from the aforementioned.
      </p>
      <p>
        If you'd like to chat please feel free to reach out on <a
          rel="external"
          href="https://twitter.com/tomhendra">Twitter</a
        >. I am really keen to enhance my network and give back to the community
        in any which way I can.
      </p>
      <p />
    </section>
  </main>
</div>

<style lang="scss">
  main {
    padding: var(--space-24) 0;

    @include tabletAndDown {
      padding: var(--space-20) 0;
    }

    @include mobileAndDown {
      padding: var(--space-16) 0;
    }
  }

  .header-section {
    padding-bottom: var(--space-16);

    .heading-prefix {
      font-size: var(--font-size-md);
      line-height: var(--line-height-md);
      font-weight: var(--font-weight-semibold);
      color: var(--color-primary-heading);
    }

    h1 {
      margin-top: var(--space-3);
    }

    .subtitle {
      font-size: var(--font-size-text-xl);
      line-height: var(--line-height-text-xl);

      @include mobileAndDown {
        font-size: var(--font-size-text-lg);
        line-height: var(--line-height-text-lg);
      }
    }
  }

  .main-section {
    columns: 2;
    gap: var(--space-16);

    @include tabletAndDown {
      columns: 1;
      gap: 0;
      max-width: var(--container-md);
    }

    p {
      break-inside: avoid;
    }
  }
</style>
