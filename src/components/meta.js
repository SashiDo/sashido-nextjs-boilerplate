import Head from "next/head";

const Meta = () => (
  <>
    <Head>
      <title>Hello from SashiDo & NextJS</title>
    </Head>
    <style jsx global>{`
        html, body {
          margin: 0;
          font-size: 16px;
          line-height: 1;
          color: #fff;
          font-weight: 300;
          background: #37517c;
          font-family: sans-serif;
        }

        .viewport {
          width: 100vw;
          height: 100vh;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
        }


        .content {
          width: 100%;
          height: 90%;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
            -ms-flex-direction: column;
              flex-direction: column;
          -webkit-box-pack: center;
            -ms-flex-pack: center;
              justify-content: center;
          -webkit-box-align: center;
            -ms-flex-align: center;
              align-items: center;
          border-top: 3px solid #00a9ff;
        }

        span {
          font-size: 22px;
          color: #33baff;
        }
      `}</style>
  </>
);

export default Meta;
