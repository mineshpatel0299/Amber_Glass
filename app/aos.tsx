    'use client';
    import { useEffect } from 'react';
    import AOS from 'aos';
    import 'aos/dist/aos.css'; // Import AOS CSS

    export default function AosInit() {
      useEffect(() => {
        AOS.init({
          duration: 1200, // Customize animation duration
          // Add other AOS options here
        });
      }, []);

      return null; // Or return a fragment if you need to wrap children
    }