/**
 * Configuration File
 * Replace values with your information
 */

const Config = {
  title: 'Cryonics Tech Tree',
  subtitle: 'Alpha v0.1',
  key: [
    {
      title: 'Challenge',
      color: '#C89548',
    },
    {
      title: 'Technology',
      color: '#B8E986',
    },
    {
      title: 'Off-target Application',
      color: '#6580E1',
    }
  ],
  axis_enabled: false,
  axis_x: ['Example One', 'Example Two', 'Example Three'],
  axis_y: ['Example A', 'Example B', 'Example C'],
  github_repo_owner: 'CryoDAO',
  github_repo_name: 'cryo-tree',
  github_base_branch: 'master',
  github_token: process.env.REACT_APP_TOKEN,
  cover_image_url: 'https://fsnone-bb4c.kxcdn.com/wp-content/uploads/2021/10/Biotech-program-image.jpg',
  tree_background_color: '#1D243C'
}

export default Config;