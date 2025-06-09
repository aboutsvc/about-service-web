var klaroConfig = {
  acceptAll: true,
  translations: {},
  services: [
    {
      name: 'google-tag-manager',
      required: true,
      purposes: ['marketing', 'functional'],
      manages: ['google-analytics', 'google-ads', 'google-ad-user-data', 'google-ad-personalization'],
      onAccept: `
        // Notify GTM about all services that were accepted.
        for(let k of Object.keys(opts.consents)){
            if (opts.consents[k]){
                let eventName = 'klaro-'+k+'-accepted'
                dataLayer.push({'event': eventName})
            }
        }
        // Enable consented storage types
        if (opts.consents['google-analytics']){
            gtag('consent', 'update', {'analytics_storage': 'granted'})
        }
        else{
            gtag('consent', 'update', {'analytics_storage': 'denied'})
        }
        if (opts.consents['google-ads']){
            gtag('consent', 'update', {'ad_storage': 'granted'})
        }
        else{
            gtag('consent', 'update', {'ad_storage': 'denied'})
        }
        if (opts.consents['google-ad-user-data']){
            gtag('consent', 'update', {'ad_user_data': 'granted'})
        }
        else{
            gtag('consent', 'update', {'ad_user_data': 'denied'})
        }
        if (opts.consents['google-ad-personalization']){
            gtag('consent', 'update', {'ad_personalization': 'granted'})
        }
        else{
            gtag('consent', 'update', {'ad_personalization': 'denied'})
        }
      `,
      onInit: `
        window.dataLayer = window.dataLayer || [];
        window.gtag = function(){dataLayer.push(arguments)}
        gtag('consent', 'default', {
          'ad_storage': 'denied',
          'analytics_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied'
        })
        gtag('set', 'ads_data_redaction', true)
      `,
      onDecline: `
        window.dataLayer = window.dataLayer || [];
        window.gtag = function(){dataLayer.push(arguments)}
        gtag('consent', 'default', {
          'ad_storage': 'denied',
          'analytics_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied'
        })
        gtag('set', 'ads_data_redaction', true)
      `,
    },
    {
      name: 'google-analytics',
      purposes: ['marketing'],
    },
    {
      name: 'google-ads',
      purposes: ['marketing'],
    },
    {
      name: 'google-ad-user-data',
      purposes: ['marketing'],
    },
    {
      name: 'google-ad-personalization',
      purposes: ['marketing'],
    },
  ],
};
