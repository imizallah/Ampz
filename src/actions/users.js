import axios from 'axios';

export const loadUsers = () => {
  return async (dispatch) => {
    try {
      const users = await axios.get('https://jsonplaceholder.typicode.com/users');
      // const result = await axios.get(`https://randomuser.me/api/?results=${users.data.length}`);

      // let photos = result.data.results.map(user => (user.picture.thumbnail))
      // // console.log("::::::::::::::::::::::::::::::: ", photos)
      // let dance = photos.map(photo => {
      //   users.data.map(user => {
      //     user.photo = photo;
      //   })
      // })

      // console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkk", dance)


      return dispatch(setUsers(users.data));
    } catch (error) {
      console.log('error:', error);
    }
  };
};

export const setUsers = (users) => ({
  type: 'SET_USERS',
  users
});
