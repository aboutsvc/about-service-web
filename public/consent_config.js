// By default, Klaro will load the config from  a global "klaroConfig" variable.
// You can change this by specifying the "data-config" attribute on your
// script take, e.g. like this:
// <script src="klaro.js" data-config="myConfigVariableName" />
var klaroConfig = {
  // With the 0.7.0 release we introduce a 'version' paramter that will make
  // it easier for us to keep configuration files backwards-compatible in the future.
  version: 1,

  // You can customize the ID of the DIV element that Klaro will create
  // when starting up. If undefined, Klaro will use 'klaro'.
  elementID: 'klaro',

  // You can override CSS style variables here. For IE11, Klaro will
  // dynamically inject the variables into the CSS. If you still consider
  // supporting IE9-10 (which you probably shouldn't) you need to use Klaro
  // with an external stylesheet as the dynamic replacement won't work there.
  styling: {
    theme: ['light', 'bottom'],
  },

  // You can show a description in contextual consent overlays for store
  // being empty. In that case the accept always button is omitted.
  // The description contains a link for opening the consent manager.
  showDescriptionEmptyStore: true,

  // Setting this to true will keep Klaro from automatically loading itself
  // when the page is being loaded.
  noAutoLoad: false,

  // Setting this to true will render the descriptions of the consent
  // modal and consent notice are HTML. Use with care.
  htmlTexts: true,

  // Setting 'embedded' to true will render the Klaro modal and notice without
  // the modal background, allowing you to e.g. embed them into a specific element
  // of your website, such as your privacy notice.
  embedded: false,

  // You can group services by their purpose in the modal. This is advisable
  // if you have a large number of services. Users can then enable or disable
  // entire groups of services instead of having to enable or disable every service.
  groupByPurpose: true,

  // You can make the consent notice autofocused by enabling the following option
  autoFocus: false,

  // You can show a title in the consent notice by enabling the following option
  showNoticeTitle: false,

  // How Klaro should store the user's preferences. It can be either 'cookie'
  // (the default) or 'localStorage'.
  storageMethod: 'cookie',

  // You can customize the name of the cookie that Klaro uses for storing
  // user consent decisions. If undefined, Klaro will use 'klaro'.
  cookieName: 'klaro',

  // You can also set a custom expiration time for the Klaro cookie.
  // By default, it will expire after 120 days.
  cookieExpiresAfterDays: 365,

  // You can change to cookie domain for the consent manager itself.
  // Use this if you want to get consent once for multiple matching domains.
  // If undefined, Klaro will use the current domain.
  //cookieDomain: '.github.com',

  // You can change to cookie path for the consent manager itself.
  // Use this to restrict the cookie visibility to a specific path.
  // If undefined, Klaro will use '/' as cookie path.
  //cookiePath: '/',

  // Defines the default state for services (true=enabled by default).
  default: false,

  // If "mustConsent" is set to true, Klaro will directly display the consent
  // manager modal and not allow the user to close it before having actively
  // consented or declines the use of third-party services.
  mustConsent: false,

  // Show "accept all" to accept all services instead of "ok" that only accepts
  // required and "default: true" services
  acceptAll: true,

  // replace "decline" with cookie manager modal
  hideDeclineAll: false,

  // hide "learnMore" link
  hideLearnMore: false,

  // show cookie notice as modal
  noticeAsModal: false,

  translations: {
    en: {
      privacyPolicyUrl: '/privacy',
      consentModal: {
        title: 'We value your privacy',
        description:
          'We use cookies and third-party services to enhance your experience. You can choose which services you consent to.',
      },
      privacyPolicy: {
        name: 'privacy policy',
        text: 'To learn more, please read our {privacyPolicy}.',
      },
      consentNotice: {
        title: 'Cookie Consent',
        description: 'We use cookies to improve your experience. You can manage your preferences.',
        learnMore: 'Learn more',
      },
      purposes: {
        analytics: 'Analytics',
        security: 'Security',
        essential: 'Essential',
        marketing: 'Marketing',
      },
    },
    ko: {
      privacyPolicyUrl: '/privacy',
      consentModal: {
        title: '귀하의 개인정보를 소중하게 생각합니다',
        description:
          '저희는 귀하의 경험을 향상시키기 위해 쿠키와 제3자 서비스를 사용합니다. 동의할 서비스를 직접 선택하실 수 있습니다.',
      },
      privacyPolicy: {
        name: '개인정보 처리방침',
        text: '자세한 내용은 저희 {privacyPolicy}를 확인해 주세요.',
      },
      consentNotice: {
        title: '쿠키 동의',
        description: '저희는 귀하의 경험을 개선하기 위해 쿠키를 사용합니다. 환경설정을 관리하실 수 있습니다.',
        learnMore: '자세히 알아보기',
      },
      purposes: {
        analytics: '분석',
        security: '보안',
        essential: '필수',
        marketing: '마케팅',
      },
      purposeItem: {
        service: '서비스',
      },
      service: {
        purpose: '목적',
      },
      decline: '거부',
      ok: '동의',
      acceptSelected: '선택 동의',
      acceptAll: '모두 동의',
      poweredBy: 'Realized with Klaro!',
    },
  },

  // This is a list of third-party services that Klaro will manage for you.
  services: [
    {
      // Each service should have a unique (and short) name.
      name: 'google-analytics',

      // If "default" is set to true, the service will be enabled by default
      // Overwrites global "default" setting.
      // We recommend leaving this to "false" for services that collect
      // personal information.
      default: true,

      // The title of your service as listed in the consent modal.
      title: 'Google Analytics',

      // The purpose(s) of this service. Will be listed on the consent notice.
      // Do not forget to add translations for all purposes you list here.
      purposes: ['analytics'],

      // A list of regex expressions or strings giving the names of
      // cookies set by this service. If the user withdraws consent for a
      // given service, Klaro will then automatically delete all matching
      // cookies.
      cookies: [
        /^_ga/, // Universal Analytics & GA4
        /^_ga_[\w]+/, // GA4 (e.g., _ga_XXXXXXXXXX)
      ],

      // If "required" is set to true, Klaro will not allow this service to
      // be disabled by the user.
      required: false,

      // If "optOut" is set to true, Klaro will load this service even before
      // the user gave explicit consent.
      // We recommend always leaving this "false".
      optOut: false,

      // If "onlyOnce" is set to true, the service will only be executed
      // once regardless how often the user toggles it on and off.
      onlyOnce: true,

      callback: function (consent, service) {
        window.dataLayer = window.dataLayer || [];
        window.gtag = function () {
          dataLayer.push(arguments);
        };

        if (consent) {
          gtag('consent', 'update', {
            ad_storage: 'granted',
            analytics_storage: 'granted',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
          });
        }
      },
    },
  ],
};
