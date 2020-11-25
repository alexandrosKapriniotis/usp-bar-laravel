@extends('extended-layout')

@section('styles')
@parent
<link href="https://unpkg.com/@shopify/polaris@5.5.0/dist/styles.css" media="all" rel="stylesheet" type="text/css" />
<link rel="stylesheet" type="text/css" href="{{ mix('/css/app.css') }}" />
<link rel="stylesheet" type="text/css" href="{{ url('/css/site.css') }}" />
<link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-bs4.min.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="{{ url('/css/file-upload-with-preview.min.css') }}" />
<link rel="stylesheet" type="text/css" href="{{ url('/css/tailwind.css') }}" />
@endsection

@section('content')
<style>
    html {
        font-size: 70%;
    }
</style>
    <!-- You are: (shop domain name) -->
{{--    <p>You are: {{ Auth::user()->name }}</p>--}}

    <div style="--top-bar-background:#00848e; --top-bar-background-lighter:#1d9ba4; --top-bar-color:#f9fafb;">
        <div class="BC-AnotherLayout">
            <div class="Polaris-Page">
                <div class="Polaris-Page__Content">
                    <div class="BC-Page__Dashboard">
                        <div class="Polaris-Layout">
                            <div class="Polaris-Layout__Section"></div>
                            <div class="Polaris-Layout__Section">
                                <div class="BC-Welcome__Dashboard">
                                    <div class="Polaris-Layout">
                                        <div class="Polaris-Layout__Section">
                                            <p class="Polaris-DisplayText Polaris-DisplayText--sizeLarge">Welcome, to the USP Bar!</p>
                                            <p class="Polaris-DisplayText Polaris-DisplayText--sizeSmall">
                                            <span class="Polaris-TextStyle--variationSubdued">
                                                Please set up the General and Typography Settings
                                            </span>
                                            </p>
                                            <a type="button" href="/settings" class="Polaris-Button Polaris-Button--primary" style="margin-top:15px;">
                                            <span class="Polaris-Button__Content">
                                                <span class="Polaris-Button__Text">Settings</span>
                                            </span>
                                            </a>
                                        </div>
                                        <div class="Polaris-Layout__Section Polaris-Layout__Section--oneThird">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="Polaris-Layout__Section"></div>
                            <div class="Polaris-Layout__Section">
                                <div class="BC-CalloutCard-ThemeSetup__Dashboard">
                                    <div class="Polaris-Card">
                                        <div class="Polaris-Card__Section">
                                            <div class="layoutCols">
                                                <div class="firstCol">
                                                    <div class="Polaris-TextContainer"><p class="theme-status-text">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="Polaris-Layout__Section">
                                <div class="BC-HelpCenter__Dashboard">
                                    <div class="Polaris-Card">
                                        <div class="Polaris-Card__Header"><h2 class="Polaris-Heading">Help center</h2></div>
                                        <div class="Polaris-Card__Section">
                                            <div class="Polaris-Layout">
                                                <div class="Polaris-Layout__Section Polaris-Layout__Section--oneThird">
                                                    <a class="BC-Link__Dashboard" href="">
                                                        <div class="menuBox">
                                                            <div class="Polaris-Card">
                                                                <div class="Polaris-Card__Section">
                                                                    <div style="display: flex;">
                                                                        <div class="menuIconImg">
                                                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARPSURBVHgBxVldbttGEJ5ZUgHauoh6A/UEUU9g+QSx0dqA0YdINvLQh1bhCSyfgFLSpwYO5aegtgErJ4hygignMHMDPThAEps7mV1K8u6K+nMk6gMEgrN/387uDGdGCPdE+PJ1BYRf9oA2CaEMgEUWFwfNff7FSBQnQB9Aym7wdL8L9wAu0jmMoqIPG3VJ8MwgM+9SMSJ0k883x8Ff+/Hco+bppIh5sHFEKbHvBiK25yU6k+C/ry6e8DE1YWGNzVw6liSPg8O99tRe0xqfR+fhFK31CbFDUr6DBHpQ+BQHtZq6e1rjcPNTCTy+m4gVAfAYJmyQj735T203gEUI6iOljUsCqIy3Eu8cWyCu20NC8yA8OasKhCNesjRGgqiTiE+1rPn8rMk8+XNESBVH3GfjUEfShHtgcJTt8OS8kRK9A5/ENitEaXjLHTemwexjZa19SbYWsb5pCKPXJUHeW1ebWcdtEUyPASNYIblZJPm9Wj/443T0Zg8o8AAqrZrcDJJ9ide/Du+jGEo9KBzZ5ABWSU4hqO3HEhN170zj0D53+KIJqp0QUdUcrA1iheQskryWKVM2oF3VkGCqPatLHBzuNiAn8FpNtaYllD9qQ9UEmXHFanN2lAe0bzUgUNTVE1VUIjz/rdHWrx/s/gI5I4wui4Jur8D44sgEtgQIUTE7qs8XrAFBbacvQb6xhCIpC094j0yZ/rauC4Rd6x1FRbD1liyhuOnBuqCCDgN8vI/Ut7hk9/oaZ429C7tQ+ayG6e2X0a5RKMRAt4aAisqKrTBoUoSS8KRpX6Vxai67PV17x127KGBukLER6i+/PRuKoNV56MFdSKJg4Ew57PKOl92ern3prt3HVnR2xdZTGk2EX38Lan+uxVDC/87Kwsf3IwFSj2NHYZORhTKsCypFMMBftI8ikWT5PRRiE9YEz12bWIMgbd/D+cH2pHu4arBP3rYEUnRF8HS3C048BvKHKuQMFc2D5fI4omJu2s1wfupEEn4dcgZHL04iJbpanrY+cBwnlcKT/xuQE15E52PRPHHlQT01wTSSsOMxxHyMRUXzbK0NU8YRVXsYzd/lJAgPrZGIMeRALk3ULHrxUHsKI4JuVE23dAq5kHMSNScXSpMmVetz0s2BdedLDqjlFpN06cPzC0/YB42EQwvSkzF5z/cfA0EZkTp/1/Za8B14EV1wfZEadvCgThA7nDw9c/vrxL316uLK3I0qi7FXf8icqzBWlZqvbGZCO365oaoWdVdrmhxAl/B6JyvUy0qa5kWfC5GdRKUIMonB/9yzy28PuPwmyp4obA6+ENlRkjrWg72JhVF8Hl1EbtKeEzjsEkFw+Ht7WifhWm/mRLxLCbA0q9bzqfrLDHIKvntZDVKnkPDFNayZra8B5DcEV/azCpEzoOqLqvDZXKTwiUbls5hFahLCl+f8N4SsIHDailTCNPka/Q1BKqwn0ePnOxUx3ddtfQMN2VsO3RUGhwAAAABJRU5ErkJggg==" alt="iconEdit"></div>
                                                                        <div style="margin-left: 10px;line-height: 1.5;" class="menuContent align-middle">
                                                                            <span class="Polaris-TextStyle--variationStrong">Start live chat</span>
                                                                        </div>
                                                                        <div style="clear: both;"></div>
                                                                    </div>

                                                                    <div style="margin-top: 10px;" class="menuContentSub">
                                                                        <span class="Polaris-TextStyle--variationSubdued">Talk to us directly via live chat to get help with your question.</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="Polaris-Layout__Section Polaris-Layout__Section--oneThird"><a class="BC-Link__Dashboard" href="">
                                                        <div class="menuBox">
                                                            <div class="Polaris-Card">
                                                                <div class="Polaris-Card__Section">
                                                                    <div style="display: flex;">
                                                                        <div class="menuIconImg">
                                                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATWSURBVHgBzVnvThtHEJ/dO1O1pZLzBscT4Dfg/AQBNaRF/VAbmkr9UnNPAHmCs5NKlRoFm09IMVLoE2CeoO4TxH2CnFQiNTW3k5k9G++ez+ezwUlGArS7szu/m9n5s4OAJSl8ceaDdCsO4BYKqACIMk2XR8sR/QwE4iAG/BuU6gVP9nqwBIlFmMN2u+zCekMhHBpgiooaCAG9+L/h0+CXvUHhXUWYGJgD60eYALszCSE6RYHOBfjbyfmPZKYmLKyxuaIHCtXT4OBxJ5crb/FZuxvmaC1CIS5QqSuIoQ+ld4OgXue7pzUOw689cOhuCuFLgIcw4wPJ7M1f67sBLAJQmxTXXyOAP72K9OWiBfK6MwZUhMKXr2pSwBGJ9KZAIF7E8l096zw36zBHfdNGgX5qOiLnYJM0YQkambITvuweJ0AnRJbYJoWwhqvpfVMazDYrae19XF3E+/IobJ95Ep3LtDazzG0BTMwg2rBCcPNA0rjW2H90ejuyN5RoA3qrBjcHZKTE9cb4PsrxrAOlIxscwCrBMQX1vYESMd870zl0zB0PNED+EkSsmZu1Q6wQnAWSZJlz7AM6VI0BJtqzWAbBwe4xfCQiWU2WaU2qr7SjaoCE2LfWUl/0MUjHVoOkkA3+K7gqkY57aaxFjf3dB7MOmqQ+wffm2PS4u/CH7ddliTdvwMg4KoaqBCl9k5HTV57AmIQkh7BD4dygXZQ/qO9ECtSf1qSMK9KRzqYFkHNrLqGRU7FAqluAH0XPGgvpS/Jez5qUw37eGQoxGF1oSn3O3Lu6ED8XHSYUkJuiddJ9C6bdxfWDRYqA+6TRPXxrTEXsxVYZ9KnAJbJ30rLLEj5zYoAW6nEE/xTEJk5NRS5VixF5j7Gw5tGvmY5ixjWFN63g4PvcUGPxqzgIfvpudhgbDj1wjQJL4ICGso9mkaBKlTyARlwrS+GEz066D2PEU4iH/eDnH/S+8PczD9bAd4TL4PxkJ/FLyaXcbID8RDCIMto/bqzwiirc7VvQUm7Rn87MQ6y4RiN6FlAN6YO7BhQRILWW3pvrgA7JprBnsGNfgrK1Re+D7bx7mMS1pWhuHCRw27Yw2ZPBk90epOoxUF/WZh3CbwslbjboO3tQkJhX3WA1OPi2M4uHq3mwQh5VVIRNP5rofdqi6mFSJAqXK4mcvKnrxGr4x6sKPbtqAsQmXe2KISAiUH2y1hVZqDdSQi4l8ifmRSH1Hu0yGRGcQJPHzfHQ+6Ln7e4ROcSxOafe32xwwawDdVJJpOsx50h744qJq/k0OKqoOuNqfpJJhMNM1l2UX5QuVwly8lCz4A2Q+jbj0S1ArcUpD0VvVSCzX5HTbyErF2sPTZl6FSBnggNspZtJU8VCsP/oUEyFEAbpvuHLDHek5+3zhkT3rzQ4RHER7D8+TPNn9mZi4e44Kub+jBU4+TK3Ts5rRdpmJunAr9a5a0HNz1SBDEmcRPlvPWtvbvstPDlvSsDGjOWIGpEXsW6/URVe+j/VfqOiw5EVR5a2RhkiMztps2ZorhBALSynbXZHIqeUQV52YZpbsCapLa4qgFO4J2Kt6f7LHHBMCzbRyZPRPSazby2hUe4vcuOzucizYiGAJoUvuvRvCOULoGerQI8O8sDKxVwI61qT83G/SD7Oog9ZSpgtYlwRLQAAAABJRU5ErkJggg==" alt="iconEdit">
                                                                        </div>
                                                                        <div style="margin-left: 10px;line-height: 1.5;" class="menuContent align-middle"><span class="Polaris-TextStyle--variationStrong">Visit Help Center</span>
                                                                        </div>
                                                                        <div style="clear: both;"></div>
                                                                    </div>
                                                                    <div style="margin-top: 10px;" class="menuContentSub">
                                                                        <span class="Polaris-TextStyle--variationSubdued">Find a solution for your problem with the app documents and tutorials.</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></div>
                                                <div class="Polaris-Layout__Section Polaris-Layout__Section--oneThird"><a class="BC-Link__Dashboard" href="">
                                                        <div class="menuBox">
                                                            <div class="Polaris-Card">
                                                                <div class="Polaris-Card__Section">
                                                                    <div style="display: flex;">
                                                                        <div class="menuIconImg">
                                                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOrSURBVHgBzZhNTttAFMffTEy7oVK4QThB4QicoCBBKlaQpKrUVeITEE7ghFaqhEpMFxUtiUR6AnoD0hOQG9SLVGqrxK8zE+yMx+NPHOC/CGQ8H7/Mm/+8lxB4QrJsu2zAatNFaAEQhzW1CTwBBcGgLD1yDHhEyWBuEMzXowCmAeNCgNGDAqYF84SAPx8EMCuYL3THSwXMDebJLY2W4uIYV2aSSyZrhQKmBHPYbn6nAAdquzLGadb31goJccpQOux5F2Y4pAa9Eh6VRJCeI3Fb3nvuYP73XoCZwOikY9ZrTrfXv2HLV+QO7Pkxe3Wo1MYdnBswDxhvOLH7FiJsqHBmY69t9S47bB8lQnecGTAvGNd7u390dzYXDEiGZmO3zf8vAXkZCDpzcGrA+4DN4QZsLLaD3XGMdFLz30FwZ8GYCECSFgzSgNWCYGKO08sNapAbFc79O9sy3+2P5+tclSlOf8lzcgcLziSwPDu2mOeiQjHsWHcKOx6c0PTPBpQWKJ6DQ4BFgXlzUVy51jjWNN9WR4HO1AiE13OwD1gkmKeS+8JGEr5OmGM7oc6iX9jBAvBDb3AwQ+wUBcY1dyxuB+AAu2aj2tb1j3KwAJyxshr0cJnBFnBiTlkjs15tRY2JcjAXu7xRu3ME8Qf8m57rnBkl69O37TAcd+x0J3IMczAoOVhek7JQmHwSdSASsk2fr1xbZ18jP3lwIeZYSm2l2ZGvE624g+V1JQcLQHYuzl0y22Jn8HN4NFYoKVnd3uDWOv2yAXFwwrHBo+K6bi0WThBEO1g85i9mbX9s1vcO3Slu6nZTgBrPbk7sgW19vKiE1kDjSlcAmG9eDyFJitNlB/uAnvj91KxX1/ldpQ074qEadl4AAOgLAEgh7uBAg+RgwR81kIcN0GhrCktv6JgQHKKmAGg1diNNoYqVXzzF+UeDV9GySRIr6nkuBRZCUoFEMceS35tpnR+Xgz3RpEmSwi5PLhyb4VpKcnAqQB+UpahotwuVxfmMcXtICQ7OBCggA27XKd7tISU4ODOgp1A1okjndp2SHJwbMJ2SL/m4HOypMMCsl3xSDi4ckIedXzGgcaLAVMOewsGFAvIyi+LqLahhC2L6YS8ZxqvAE42DuQr78UhTA8YIK2oG0jmYa4kmEQXvMU9dKS55rYO5lvHzm64S77DcPozN7RoHc+X+dUtN8pDw/diTPrfjmKdTXf/cO8grcUrgiC1UzvLd5e6SX7fO+i1KsDkfXzqO6v8fHB6jtUhuUvYAAAAASUVORK5CYII=" alt="iconEdit"></div>
                                                                        <div style="margin-left: 10px;line-height: 1.5;" class="menuContent align-middle">
                                                                            <span class="Polaris-TextStyle--variationStrong">Send a support ticket</span>
                                                                        </div>
                                                                        <div style="clear: both;"></div>
                                                                    </div>
                                                                    <div style="margin-top: 10px;" class="menuContentSub">
                                                                        <span class="Polaris-TextStyle--variationSubdued">Create a ticket and we will be in touch within 6 hours.</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

