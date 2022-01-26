const apiRequest = async (url = '', optiionObj = null, errMsg = null) => {
  try {
    const response = await fetch(url, optiionObj);
    if (!response.ok) throw Error("Not connected!");
  } catch (err) {
    errMsg = err.message;
  } finally {
    return errMsg;
  }
}

export default apiRequest;