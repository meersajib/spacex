import { writable } from 'svelte/store';

export const landingPads = writable([]);

export async function fetchLandingPads() {
  const res = await fetch('https://api.spacexdata.com/v3/landpads');
  const data = await res.json();

  const updatedData = data.map(pad => {
    console.log('pad',pad)
    const successRate = pad.attempted_landings
      ? (pad.successful_landings / pad.attempted_landings) * 100
      : 0;

    // Ensure success_rate has two decimal places
    return {
      ...pad,
      showModal: false ,
      success_rate: parseFloat(successRate.toFixed(2))
    };
  });

  landingPads.set(updatedData);
}
