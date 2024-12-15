import Head from "next/head";
import Inner from "../components/Layout/Inner";
import Stairs from "../components/Layout/Stairs";
import Curve from "../components/Layout/Curve";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Inner>
        <h1>Home</h1>
        <div className="body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            imperdiet nibh sit amet velit dignissim, non tempus nisl
            pellentesque. Praesent sagittis magna sit amet ex blandit, id
            pharetra lectus feugiat. Praesent sit amet congue ipsum, in ultrices
            neque. In dapibus in purus vitae dignissim. Quisque molestie
            ullamcorper elementum. Sed sodales erat augue. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Duis aliquet quis lectus vitae
            venenatis. Aliquam erat volutpat. Nulla maximus sodales nibh dapibus
            congue. Integer nec pharetra felis, quis commodo elit. Fusce et
            aliquet neque. Vivamus leo diam, pharetra ut lorem eu, suscipit
            egestas ipsum. Aenean mauris ligula, laoreet ut volutpat sit amet,
            convallis et turpis.
          </p>
          <p>
            Quisque molestie ullamcorper elementum. Sed sodales erat augue.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            aliquet quis lectus vitae venenatis. Aliquam erat volutpat. Nulla
            maximus sodales nibh dapibus congue. Integer nec pharetra felis,
            quis commodo elit. Fusce et aliquet neque. Vivamus leo diam,
            pharetra ut lorem eu, suscipit egestas ipsum. Aenean mauris ligula,
            laoreet ut volutpat sit amet, convallis et turpis.
          </p>
        </div>
      </Inner>
    </>
  );
}
