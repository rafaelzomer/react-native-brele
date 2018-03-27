import storage from '../storage/storage';
// import firebase from '../firebase/firebase';

const USER_STORAGE_KEY = 'goal_user';
class Auth {
  login({email, password, rememberMe}) {
    // return firebase.auth().signInWithEmailAndPassword(email, password)
    // .then(async (user) => {
    //   const {uid} = user;
    //   if (rememberMe)
    //   {
    //     storage.setItem(USER_STORAGE_KEY, {
    //       uid: user.uid,
    //       email: user.email
    //     });
    //   }
    //   return user;
    // })
    // .catch((err) => {
    //   throw err;
    // });
  }
  async logout() {
    // storage.setItem(USER_STORAGE_KEY, null).catch((e) => {
    //   console.warn('WTF', e);
    // });
    // return true;
  }
  async createUser({email, password, type, name}) {
    // return firebase.auth().createUserWithEmailAndPassword(email, password)
    // .then((user) => {
    //   if (user) {
    //     const {uid} = user;
    //     firebase.database()
    //       .ref('users/'+uid)
    //       .set({
    //         type,
    //         name
    //       });
    //     console.warn('us', user);
    //   }
    // });
  }
  user() {
    return storage.getItem(USER_STORAGE_KEY);
  }

}

export default new Auth();
