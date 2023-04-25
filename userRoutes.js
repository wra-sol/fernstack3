import express from 'express';
const router = express.Router ();
import {db} from './firebase.js';
import {ref, set, get, update, remove} from 'firebase/database';

router.get ('/data', async (req, res, next) => {
  const {userId} = req.body;
  console.log(userId)
  try {
    get (ref (db, 'users/' + userId )).then (snapshot => {
      if (snapshot.exists ()) {
        res.status (200).json (snapshot.val ());
      } else {
        console.log ('No data available');
        res.status(200).json({});
      }
    });
  } catch (error) {
    next (new Error (error.message));
  }
});

router.post ('/data', async (req, res, next) => {
  
  const {userId, userData} = req.body;

  try {
    await set (ref (db, 'users/' + userId + '/' + userData.id), userData)
      .then (() => {
        res.status (200).json ({...userData});
      })
      .catch (e => {
        throw e;
      });
  } catch (error) {
    next (new Error (error.message));
  }
});

router.put('/data', async (req, res, next) => {
  const { userId, updatedData } = req.body;

  try {
    await update(ref(db, `users/${userId}/${updatedData.id}`), updatedData)
      .then(() => {
        res.status(200).json({...updatedData});
      })
      .catch(e => {
        throw e;
      });
  } catch (error) {
    next(new Error(error.message));
  }
});

router.delete('/data', async (req, res, next) => {
  const { userId, items } = req.body;
  console.log(items)
  try {
    for (const item of items) {
      const itemRef = ref(db, `users/${userId}/${item.id}`);
      await remove(itemRef)
    }
    res.status(200).json({ message: 'Items deleted successfully' });
  } catch (error) {
    next(new Error(error.message));
  }
});

export default router;
