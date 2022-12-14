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
    }
  ],
  axis_enabled: false,
  axis_x: ['Example One', 'Example Two', 'Example Three'],
  axis_y: ['Example A', 'Example B', 'Example C'],
  github_repo_owner: 'CryoDAO',
  github_repo_name: 'cryo-tree',
  github_base_branch: 'master',
  github_token: process.env.REACT_APP_TOKEN,
  cover_image_url: 'https://global-uploads.webflow.com/62792c49f89cb3ce12affeaa/631a137fc56a963acb353c95_tomorrow_header%20(2).jpg',
  tree_background_color: '#1D243C'
}

export default Config;