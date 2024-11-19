export const load = async () => {
  const response = await fetch("https://api.spacexdata.com/v3/landpads");
  const data = await response.json();
  const landpads = data.map((pad) => {
    const successRate = pad.attempted_landings
      ? (pad.successful_landings / pad.attempted_landings) * 100
      : 0;

    return {
      ...pad,
      showModal: false,
      success_rate: parseFloat(successRate.toFixed(2)),
    };
  });
  return { landpads };
};
