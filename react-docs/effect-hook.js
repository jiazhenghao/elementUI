/*
1.0
If you want to run an effect and clean it up only once (on mount and unmount), 
you can pass an empty array ([]) as a second argument. 
*/

/*
1.1
While passing [] as the second argument is closer to the familiar componentDidMount 
and componentWillUnmount mental model, there are usually better solutions to avoid 
re-running effects too often.
*/
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if count changes

useEffect(() => {
  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  return () => {
    ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  };
}, [props.friend.id]); // Only re-subscribe if props.friend.id changes
