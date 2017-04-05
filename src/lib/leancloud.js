/**
 * Created by hasee on 2017/4/5.
 */
import AV from 'leancloud-storage'

const APP_ID = "jar0NBSjKFbExYq9gIGCBQSH-gzGzoHsz"
const APP_KEY = "qPnShdfLCeP2VQMTMKrFw6hg"

AV.init({
  appId:APP_ID,
  appKey:APP_KEY
})

export default AV
