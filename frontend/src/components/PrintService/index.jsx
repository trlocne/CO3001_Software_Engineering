import React from 'react';
import classes from './style.module.css';

export const PrintService = () => {
  return (
    <div className={classes.whole}>
      {/* Left Frame */}
      <div className={classes.leftFrame}>
        <div className={classes.uploadSection}>
          <div className={classes.uploadButton}>New Upload</div>
          <div className={classes.recentButton}>Recent</div>
        </div>

        <div className={classes.fileList}>
          {/* File pdf */}
          <div className={classes.fileItem}>
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 500 511.56"><path fill-rule="nonzero" d="M117.91 0h201.68c3.93 0 7.44 1.83 9.72 4.67l114.28 123.67c2.21 2.37 3.27 5.4 3.27 8.41l.06 310c0 35.43-29.4 64.81-64.8 64.81H117.91c-35.57 0-64.81-29.24-64.81-64.81V64.8C53.1 29.13 82.23 0 117.91 0zM325.5 37.15v52.94c2.4 31.34 23.57 42.99 52.93 43.5l36.16-.04-89.09-96.4zm96.5 121.3l-43.77-.04c-42.59-.68-74.12-21.97-77.54-66.54l-.09-66.95H117.91c-21.93 0-39.89 17.96-39.89 39.88v381.95c0 21.82 18.07 39.89 39.89 39.89h264.21c21.71 0 39.88-18.15 39.88-39.89v-288.3z" /><path fill="red" d="M28.04 194.61h443.92c15.43 0 28.04 12.63 28.04 28.04v188.54c0 15.4-12.63 28.04-28.04 28.04H28.04C12.64 439.23 0 426.61 0 411.19V222.65c0-15.43 12.62-28.04 28.04-28.04z" /><path fill="#fff" fill-rule="nonzero" d="M150.36 348.17H125.2v29.21H86.5V256.45h60.95c27.74 0 41.6 14.9 41.6 44.7 0 16.38-3.61 28.51-10.83 36.37-2.71 2.97-6.45 5.49-11.22 7.55-4.78 2.07-10.32 3.1-16.64 3.1zm-25.16-60.76v29.8h8.9c4.65 0 8.03-.49 10.16-1.45 2.13-.97 3.19-3.2 3.19-6.68v-13.54c0-3.49-1.06-5.71-3.19-6.68-2.13-.97-5.51-1.45-10.16-1.45h-8.9zm79.82 89.97V256.45h54.17c21.8 0 36.77 4.65 44.89 13.93 8.13 9.29 12.19 24.8 12.19 46.54 0 21.73-4.06 37.24-12.19 46.53-8.12 9.29-23.09 13.93-44.89 13.93h-54.17zm54.75-89.97h-16.06v59.02h16.06c5.29 0 9.13-.62 11.52-1.84 2.38-1.23 3.58-4.03 3.58-8.42v-38.5c0-4.39-1.2-7.2-3.58-8.42-2.39-1.23-6.23-1.84-11.52-1.84zm145.99 45.08h-32.89v44.89h-38.7V256.45h79.33l-4.84 30.96h-35.79v16.25h32.89v28.83z" /></svg>
            <span className={classes.fileName}>2-diem-lich-su-dang.pdf</span>
            <span className={classes.fileSize}>604KB</span>
            <button className={classes.optionsButton}>⋮</button>
          </div>
          {/* File word */}
          <div className={classes.fileItem}>
            <svg width="18" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ fill: '#000000' }}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>file_type_word2</title>
              <path style={{ fill: '#283c82' }} d="M18.536,2.323V4.868c3.4.019,7.12-.035,10.521.019a.783.783,0,0,1,.912.861c.054,6.266-.013,12.89.032,19.157-.02.4.009,1.118-.053,1.517-.079.509-.306.607-.817.676-.286.039-.764.034-1.045.047-2.792-.014-5.582-.011-8.374-.01l-1.175,0v2.547L2,27.133Q2,16,2,4.873L18.536,2.322"></path>
              <path style={{ fill: '#fff' }} d="M18.536,5.822h10.5V26.18h-10.5V23.635h8.27V22.363h-8.27v-1.59h8.27V19.5h-8.27v-1.59h8.27V16.637h-8.27v-1.59h8.27V13.774h-8.27v-1.59h8.27V10.911h-8.27V9.321h8.27V8.048h-8.27V5.822"></path>
              <path style={{ fill: '#fff' }} d="M8.573,11.443c.6-.035,1.209-.06,1.813-.092.423,2.147.856,4.291,1.314,6.429.359-2.208.757-4.409,1.142-6.613.636-.022,1.272-.057,1.905-.1-.719,3.082-1.349,6.19-2.134,9.254-.531.277-1.326-.013-1.956.032-.423-2.106-.916-4.2-1.295-6.314C8.99,16.1,8.506,18.133,8.08,20.175q-.916-.048-1.839-.111c-.528-2.8-1.148-5.579-1.641-8.385.544-.025,1.091-.048,1.635-.067.328,2.026.7,4.043.986,6.072.448-2.08.907-4.161,1.352-6.241"></path>
            </g>
            </svg>
            <span className={classes.fileName}>2-diem-lich-su-dang.pdf</span>
            <span className={classes.fileSize}>604KB</span>
            <button className={classes.optionsButton}>⋮</button>
          </div>
        </div>
        
        <button className={classes.viewAllButton}>View all uploads</button>
      </div>
      
      
      {/* Right Frame */}
      <div className={classes.rightFrame}>
        <div className={classes.placeholderBox}></div>
        <button className={classes.printConfigButton}>Cấu hình in</button>
      </div>  
    </div>
  );
};
