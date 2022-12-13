// From 22-MERN Activity-26


// Notes:
// We need to change the state (function changes State)
// function goes to check 
// State Change

// projectName = database, if something gets passed in, it takes projectName parameter, which could be a table name
// method & objects you are passing to method 
export function idbPromise(projectName, method, object) {
    return new Promise((resolve, reject) => {
        // bug-tracker = db name, not relating back to Mango Table
        // DB in the browser
      const request = window.indexedDB.open('bug-tracker', 1);
      let db, tx, project;
      request.onupgradeneeded = function(e) {
        const db = request.result;
        db.createObjectStore('project', { keyPath: '_id' });
        db.createObjectStore('workspace', { keyPath: '_id' });
        db.createObjectStore('task', { keyPath: '_id' });
      };
  
      request.onerror = function(e) {
        console.log('There was an error');
      };
  
      request.onsuccess = function(e) {
        db = request.result;
        tx = db.transaction(projectName, 'readwrite');
        project = tx.objectStore(projectName);
  
        db.onerror = function(e) {
          console.log('error', e);
        };
            // CRUD operations 
        switch (method) {
          case 'put':
            project.put(object);
            resolve(object);
            break;
          case 'get':
            const all = project.getAll();
            all.onsuccess = function() {
              resolve(all.result);
            };
            break;
          case 'delete':
            project.delete(object._id);
            break;
          default:
            console.log('No valid method');
            break;
        }
  
        tx.oncomplete = function() {
          db.close();
        };
      };
    });
  }
  