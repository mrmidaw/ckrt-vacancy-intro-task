export const data = [
    {
        "type": "directory", "name": "dumpster", "contents": [
            {
                "type": "directory", "name": "build", "contents": [
                    { "type": "file", "name": "build.bat" },
                    { "type": "file", "name": "build.xml" },
                    {
                        "type": "directory", "name": "config", "contents": [
                            { "type": "file", "name": "develop.xml" },
                            { "type": "file", "name": "production.xml" },
                            { "type": "file", "name": "stage.xml" },
                            { "type": "file", "name": "version.xml" }
                        ]
                    }
                ]
            },
            {
                "type": "directory", "name": "module", "contents": [
                    {
                        "type": "directory", "name": "config", "contents": [
                            {
                                "type": "directory", "name": "fastReport", "contents": [
                                    {
                                        "type": "directory", "name": "Ckrt.Platform.Config.FastReport", "contents": [
                                            { "type": "file", "name": "app.config" },
                                            { "type": "file", "name": "Ckrt.Platform.Config.FastReport.csproj" },
                                            { "type": "file", "name": "FastReportContainerExtensions.cs" },
                                            {
                                                "type": "directory", "name": "Handler", "contents": [
                                                    { "type": "file", "name": "FastReportTemplateHandler.cs" }
                                                ]
                                            },
                                            { "type": "file", "name": "packages.config" },
                                            {
                                                "type": "directory", "name": "Properties", "contents": [
                                                    { "type": "file", "name": "AssemblyInfo.cs" }
                                                ]
                                            }
                                        ]
                                    },
                                    { "type": "file", "name": "README.md" }
                                ]
                            },
                            {
                                "type": "directory", "name": "search", "contents": [
                                    { "type": "file", "name": "README.md" },
                                    {
                                        "type": "directory", "name": "source", "contents": [
                                            {
                                                "type": "directory", "name": "Ckrt.Platform.Config.Search", "contents": [
                                                    { "type": "file", "name": "Ckrt.Platform.Config.Search.csproj" },
                                                    {
                                                        "type": "directory", "name": "database", "contents": [
                                                            {
                                                                "type": "directory", "name": "mssql", "contents": [
                                                                    { "type": "file", "name": "01000_Init.sql" },
                                                                    {
                                                                        "type": "directory", "name": "menu_main", "contents": [
                                                                            {
                                                                                "type": "directory", "name": "migration", "contents": [
                                                                                    { "type": "file", "name": "01000_Init.sql" }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "type": "directory", "name": "procedure", "contents": [
                                                                                    { "type": "file", "name": "search_menu_main.sql" }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "type": "directory", "name": "user", "contents": [
                                                                            {
                                                                                "type": "directory", "name": "migration", "contents": [
                                                                                    { "type": "file", "name": "01000_Init.sql" }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "type": "directory", "name": "procedure", "contents": [
                                                                                    { "type": "file", "name": "search_user.sql" }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "pgsql", "contents": [
                                                                    { "type": "file", "name": "01000_Init.sql" },
                                                                    {
                                                                        "type": "directory", "name": "menu_main", "contents": [
                                                                            {
                                                                                "type": "directory", "name": "migration", "contents": [
                                                                                    { "type": "file", "name": "01000_Init.sql" }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "type": "directory", "name": "procedure", "contents": [
                                                                                    { "type": "file", "name": "search_menu_main.sql" }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "type": "directory", "name": "user", "contents": [
                                                                            {
                                                                                "type": "directory", "name": "migration", "contents": [
                                                                                    { "type": "file", "name": "01000_Init.sql" }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "type": "directory", "name": "procedure", "contents": [
                                                                                    { "type": "file", "name": "search_user.sql" }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "Properties", "contents": [
                                                            { "type": "file", "name": "AssemblyInfo.cs" }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "directory", "name": "user-edit", "contents": [
                                    { "type": "file", "name": "README.md" },
                                    {
                                        "type": "directory", "name": "source", "contents": [
                                            {
                                                "type": "directory", "name": "Ckrt.Platform.Config.UserEdit", "contents": [
                                                    { "type": "file", "name": "Ckrt.Platform.Config.UserEdit.csproj" },
                                                    {
                                                        "type": "directory", "name": "database", "contents": [
                                                            {
                                                                "type": "directory", "name": "mssql", "contents": [
                                                                    {
                                                                        "type": "directory", "name": "migration", "contents": [
                                                                            { "type": "file", "name": "01000_Init.sql" }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "type": "directory", "name": "procedure", "contents": [
                                                                            { "type": "file", "name": "useredit_active_list.sql" },
                                                                            { "type": "file", "name": "useredit_change_pass_get.sql" },
                                                                            { "type": "file", "name": "useredit_change_pass_save.sql" },
                                                                            { "type": "file", "name": "useredit_change_pass_vaidate.sql" },
                                                                            { "type": "file", "name": "useredit_get.sql" },
                                                                            { "type": "file", "name": "useredit_role_list.sql" },
                                                                            { "type": "file", "name": "useredit_save.sql" },
                                                                            { "type": "file", "name": "useredit_switch_active.sql" },
                                                                            { "type": "file", "name": "useredit_user_list.sql" },
                                                                            { "type": "file", "name": "useredit_user_role_list.sql" },
                                                                            { "type": "file", "name": "useredit_validate.sql" }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "pgsql", "contents": [
                                                                    {
                                                                        "type": "directory", "name": "migration", "contents": [
                                                                            { "type": "file", "name": "01000_Init.sql" }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "type": "directory", "name": "procedure", "contents": [
                                                                            { "type": "file", "name": "useredit_active_list.sql" },
                                                                            { "type": "file", "name": "useredit_change_pass_get.sql" },
                                                                            { "type": "file", "name": "useredit_change_pass_save.sql" },
                                                                            { "type": "file", "name": "useredit_change_pass_vaidate.sql" },
                                                                            { "type": "file", "name": "useredit_get.sql" },
                                                                            { "type": "file", "name": "useredit_role_list.sql" },
                                                                            { "type": "file", "name": "useredit_save.sql" },
                                                                            { "type": "file", "name": "useredit_switch_active.sql" },
                                                                            { "type": "file", "name": "useredit_user_list.sql" },
                                                                            { "type": "file", "name": "useredit_user_role_list.sql" },
                                                                            { "type": "file", "name": "useredit_validate.sql" }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "Properties", "contents": [
                                                            { "type": "file", "name": "AssemblyInfo.cs" }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "directory", "name": "core", "contents": [
                            {
                                "type": "directory", "name": "build", "contents": [
                                    { "type": "file", "name": "build.bat" },
                                    { "type": "file", "name": "build.xml" },
                                    {
                                        "type": "directory", "name": "config", "contents": [
                                            { "type": "file", "name": "common.xml" },
                                            { "type": "file", "name": "development.xml" },
                                            { "type": "file", "name": "production.xml" },
                                            { "type": "file", "name": "version.xml" }
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "directory", "name": "resource", "contents": [
                                    { "type": "file", "name": "nuget.exe" }
                                ]
                            },
                            {
                                "type": "directory", "name": "source", "contents": [
                                    {
                                        "type": "directory", "name": "Ckrt.Platform", "contents": [
                                            {
                                                "type": "directory", "name": "Ckrt.Platform", "contents": [
                                                    {
                                                        "type": "directory", "name": "Api", "contents": [
                                                            { "type": "file", "name": "RouteHandler.cs" }
                                                        ]
                                                    },
                                                    { "type": "file", "name": "app.config" },
                                                    { "type": "file", "name": "Ckrt.Platform.csproj" },
                                                    {
                                                        "type": "directory", "name": "Handler", "contents": [
                                                            { "type": "file", "name": "PlatformEmbeddedFileHandler.cs" }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "Handlers", "contents": [
                                                            { "type": "file", "name": "RazorHandler.cs" }
                                                        ]
                                                    },
                                                    { "type": "file", "name": "packages.config" },
                                                    { "type": "file", "name": "PlatformContainerExtensions.cs" },
                                                    { "type": "file", "name": "PlatformEmbeddedModule.cs" },
                                                    {
                                                        "type": "directory", "name": "Properties", "contents": [
                                                            { "type": "file", "name": "AssemblyInfo.cs" }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "scripts", "contents": [
                                                            {
                                                                "type": "directory", "name": "angular", "contents": [
                                                                    { "type": "file", "name": "angular-calendar.html" },
                                                                    { "type": "file", "name": "angular-calendar.js" },
                                                                    { "type": "file", "name": "angular-controls.js" },
                                                                    { "type": "file", "name": "angular-cookies.js" },
                                                                    { "type": "file", "name": "angular-cookies.min.js" },
                                                                    { "type": "file", "name": "angular-cookies.min.js.map" },
                                                                    { "type": "file", "name": "angular-datepicker.js" },
                                                                    { "type": "file", "name": "angular-dropdown-sem.html" },
                                                                    { "type": "file", "name": "angular-dropdown-sem.js" },
                                                                    { "type": "file", "name": "angular-inputmask.js" },
                                                                    { "type": "file", "name": "angular.js" },
                                                                    { "type": "file", "name": "angular-loading.js" },
                                                                    { "type": "file", "name": "angular-md5.js" },
                                                                    { "type": "file", "name": "angular-menu.html" },
                                                                    { "type": "file", "name": "angular-menuitem.html" },
                                                                    { "type": "file", "name": "angular-menuitem.js" },
                                                                    { "type": "file", "name": "angular-message.js" },
                                                                    { "type": "file", "name": "angular.min.js" },
                                                                    { "type": "file", "name": "angular.min.js.gzip" },
                                                                    { "type": "file", "name": "angular.min.js.map" },
                                                                    { "type": "file", "name": "angular-modal.js" },
                                                                    { "type": "file", "name": "angular-page-dimmer.js" },
                                                                    { "type": "file", "name": "angular-page-loading.js" },
                                                                    { "type": "file", "name": "angular-popup.js" },
                                                                    { "type": "file", "name": "angular-progress.html" },
                                                                    { "type": "file", "name": "angular-progress.js" },
                                                                    { "type": "file", "name": "angular-route.js" },
                                                                    { "type": "file", "name": "angular-route.min.js" },
                                                                    { "type": "file", "name": "angular-route.min.js.map" },
                                                                    { "type": "file", "name": "angular-sanitize.js" },
                                                                    { "type": "file", "name": "angular-sanitize.min.js" },
                                                                    { "type": "file", "name": "angular-sanitize.min.js.map" },
                                                                    { "type": "file", "name": "angular-scroll.js" },
                                                                    { "type": "file", "name": "angular-semantic-search.js" },
                                                                    { "type": "file", "name": "angular-ui-router.js" }
                                                                ]
                                                            },
                                                            { "type": "file", "name": "angular-local-storage.js" },
                                                            { "type": "file", "name": "angular-local-storage.min.js" },
                                                            { "type": "file", "name": "angular-local-storage.min.js.map" },
                                                            {
                                                                "type": "directory", "name": "app", "contents": [
                                                                    { "type": "file", "name": "app.js" },
                                                                    {
                                                                        "type": "directory", "name": "common", "contents": [
                                                                            { "type": "file", "name": "CommonHelper.js" },
                                                                            { "type": "file", "name": "CommonHelper.ts" },
                                                                            { "type": "file", "name": "ExtendHelper.js" },
                                                                            { "type": "file", "name": "ExtendHelper.ts" },
                                                                            { "type": "file", "name": "Extend.js" },
                                                                            { "type": "file", "name": "MD5.js" }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "type": "directory", "name": "directives", "contents": [
                                                                            { "type": "file", "name": "addTarget.js" },
                                                                            { "type": "file", "name": "ngModelDrc.js" },
                                                                            { "type": "file", "name": "ngThumb.js" }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "type": "directory", "name": "home", "contents": [
                                                                            { "type": "file", "name": "contentHeader.html" },
                                                                            { "type": "file", "name": "homeCtrl.js" },
                                                                            { "type": "file", "name": "message.html" },
                                                                            { "type": "file", "name": "siteHeader.html" }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "type": "directory", "name": "menupanel", "contents": [
                                                                            { "type": "file", "name": "menuPanel.html" },
                                                                            { "type": "file", "name": "menuPanel.js" }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "type": "directory", "name": "parameters", "contents": [
                                                                            { "type": "file", "name": "ConstantParametersService.js" },
                                                                            { "type": "file", "name": "ConstantParametersService.ts" },
                                                                            { "type": "file", "name": "Ctrl.js" },
                                                                            { "type": "file", "name": "CtrlService.js" },
                                                                            { "type": "file", "name": "CtrlService.ts" },
                                                                            { "type": "file", "name": "Ctrl.ts" },
                                                                            { "type": "file", "name": "getParamsService.js" },
                                                                            { "type": "file", "name": "IFilterService.js" },
                                                                            { "type": "file", "name": "IFilterService.ts" },
                                                                            { "type": "file", "name": "parameters.html" },
                                                                            { "type": "file", "name": "parameters-inline.html" },
                                                                            { "type": "file", "name": "parameters.js" },
                                                                            { "type": "file", "name": "parameters-row.html" },
                                                                            { "type": "file", "name": "parameters-sem.html" },
                                                                            { "type": "file", "name": "params-journal.html" }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "type": "directory", "name": "services", "contents": [
                                                                            { "type": "file", "name": "actionService.js" },
                                                                            { "type": "file", "name": "httpEx.js" },
                                                                            { "type": "file", "name": "menuService.js" },
                                                                            { "type": "file", "name": "routeService.js" }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            { "type": "file", "name": "bootstrap.js" },
                                                            { "type": "file", "name": "bootstrap.min.js" },
                                                            {
                                                                "type": "directory", "name": "Handlers", "contents": [
                                                                    {
                                                                        "type": "directory", "name": "Base", "contents": [
                                                                            { "type": "file", "name": "DispatcherHandler.js" },
                                                                            { "type": "file", "name": "DispatcherHandler.ts" },
                                                                            { "type": "file", "name": "HandlerBase.js" },
                                                                            { "type": "file", "name": "HandlerBase.ts" },
                                                                            { "type": "file", "name": "HandlerNotFoundError.js" },
                                                                            { "type": "file", "name": "HandlerNotFoundError.ts" },
                                                                            { "type": "file", "name": "Handlers.js" },
                                                                            { "type": "file", "name": "Handlers.ts" }
                                                                        ]
                                                                    },
                                                                    { "type": "file", "name": "ICanExecute.js" },
                                                                    { "type": "file", "name": "ICanExecute.ts" },
                                                                    { "type": "file", "name": "IExecute.js" },
                                                                    { "type": "file", "name": "IExecute.ts" },
                                                                    { "type": "file", "name": "IHandler.js" },
                                                                    { "type": "file", "name": "IHandler.ts" },
                                                                    { "type": "file", "name": "IMessage.js" },
                                                                    { "type": "file", "name": "IMessage.ts" },
                                                                    { "type": "file", "name": "IOnResult.js" },
                                                                    { "type": "file", "name": "IOnResult.ts" }
                                                                ]
                                                            },
                                                            { "type": "file", "name": "jquery.js" },
                                                            { "type": "file", "name": "jquery.linq.js" },
                                                            { "type": "file", "name": "linq.js" },
                                                            { "type": "file", "name": "loaders.css.js" },
                                                            { "type": "file", "name": "lodash.js" },
                                                            { "type": "file", "name": "modernizr-2.7.1.js" },
                                                            { "type": "file", "name": "moment.js" },
                                                            { "type": "file", "name": "moment.min.js" },
                                                            { "type": "file", "name": "moment-with-locales.js" },
                                                            { "type": "file", "name": "moment-with-locales.min.js" },
                                                            { "type": "file", "name": "navigo.js" },
                                                            { "type": "file", "name": "respond.js" },
                                                            { "type": "file", "name": "respond.matchmedia.addListener.js" },
                                                            { "type": "file", "name": "respond.matchmedia.addListener.min.js" },
                                                            { "type": "file", "name": "respond.min.js" },
                                                            {
                                                                "type": "directory", "name": "semantic", "contents": [
                                                                    {
                                                                        "type": "directory", "name": "components", "contents": [
                                                                            { "type": "file", "name": "accordion.css" },
                                                                            { "type": "file", "name": "accordion.js" },
                                                                            { "type": "file", "name": "accordion.min.css" },
                                                                            { "type": "file", "name": "accordion.min.js" },
                                                                            { "type": "file", "name": "ad.css" },
                                                                            { "type": "file", "name": "ad.min.css" },
                                                                            { "type": "file", "name": "api.js" },
                                                                            { "type": "file", "name": "api.min.js" },
                                                                            { "type": "file", "name": "breadcrumb.css" },
                                                                            { "type": "file", "name": "breadcrumb.min.css" },
                                                                            { "type": "file", "name": "button.css" },
                                                                            { "type": "file", "name": "button.min.css" },
                                                                            { "type": "file", "name": "card.css" },
                                                                            { "type": "file", "name": "card.min.css" },
                                                                            { "type": "file", "name": "checkbox.css" },
                                                                            { "type": "file", "name": "checkbox.js" },
                                                                            { "type": "file", "name": "checkbox.min.css" },
                                                                            { "type": "file", "name": "checkbox.min.js" },
                                                                            { "type": "file", "name": "colorize.js" },
                                                                            { "type": "file", "name": "colorize.min.js" },
                                                                            { "type": "file", "name": "comment.css" },
                                                                            { "type": "file", "name": "comment.min.css" },
                                                                            { "type": "file", "name": "container.css" },
                                                                            { "type": "file", "name": "container.min.css" },
                                                                            { "type": "file", "name": "dimmer.css" },
                                                                            { "type": "file", "name": "dimmer.js" },
                                                                            { "type": "file", "name": "dimmer.min.css" },
                                                                            { "type": "file", "name": "dimmer.min.js" },
                                                                            { "type": "file", "name": "divider.css" },
                                                                            { "type": "file", "name": "divider.min.css" },
                                                                            { "type": "file", "name": "dropdown.css" },
                                                                            { "type": "file", "name": "dropdown.js" },
                                                                            { "type": "file", "name": "dropdown.min.css" },
                                                                            { "type": "file", "name": "dropdown.min.js" },
                                                                            { "type": "file", "name": "embed.css" },
                                                                            { "type": "file", "name": "embed.js" },
                                                                            { "type": "file", "name": "embed.min.css" },
                                                                            { "type": "file", "name": "embed.min.js" },
                                                                            { "type": "file", "name": "feed.css" },
                                                                            { "type": "file", "name": "feed.min.css" },
                                                                            { "type": "file", "name": "flag.css" },
                                                                            { "type": "file", "name": "flag.min.css" },
                                                                            { "type": "file", "name": "form.css" },
                                                                            { "type": "file", "name": "form.js" },
                                                                            { "type": "file", "name": "form.min.css" },
                                                                            { "type": "file", "name": "form.min.js" },
                                                                            { "type": "file", "name": "grid.css" },
                                                                            { "type": "file", "name": "grid.min.css" },
                                                                            { "type": "file", "name": "header.css" },
                                                                            { "type": "file", "name": "header.min.css" },
                                                                            { "type": "file", "name": "icon.css" },
                                                                            { "type": "file", "name": "icon.min.css" },
                                                                            { "type": "file", "name": "image.css" },
                                                                            { "type": "file", "name": "image.min.css" },
                                                                            { "type": "file", "name": "input.css" },
                                                                            { "type": "file", "name": "input.min.css" },
                                                                            { "type": "file", "name": "item.css" },
                                                                            { "type": "file", "name": "item.min.css" },
                                                                            { "type": "file", "name": "label.css" },
                                                                            { "type": "file", "name": "label.min.css" },
                                                                            { "type": "file", "name": "list.css" },
                                                                            { "type": "file", "name": "list.min.css" },
                                                                            { "type": "file", "name": "loader.css" },
                                                                            { "type": "file", "name": "loader.min.css" },
                                                                            { "type": "file", "name": "menu.css" },
                                                                            { "type": "file", "name": "menu.min.css" },
                                                                            { "type": "file", "name": "message.css" },
                                                                            { "type": "file", "name": "message.min.css" },
                                                                            { "type": "file", "name": "modal.css" },
                                                                            { "type": "file", "name": "modal.js" },
                                                                            { "type": "file", "name": "modal.min.css" },
                                                                            { "type": "file", "name": "modal.min.js" },
                                                                            { "type": "file", "name": "nag.css" },
                                                                            { "type": "file", "name": "nag.js" },
                                                                            { "type": "file", "name": "nag.min.css" },
                                                                            { "type": "file", "name": "nag.min.js" },
                                                                            { "type": "file", "name": "popup.css" },
                                                                            { "type": "file", "name": "popup.js" },
                                                                            { "type": "file", "name": "popup.min.css" },
                                                                            { "type": "file", "name": "popup.min.js" },
                                                                            { "type": "file", "name": "progress.css" },
                                                                            { "type": "file", "name": "progress.js" },
                                                                            { "type": "file", "name": "progress.min.css" },
                                                                            { "type": "file", "name": "progress.min.js" },
                                                                            { "type": "file", "name": "rail.css" },
                                                                            { "type": "file", "name": "rail.min.css" },
                                                                            { "type": "file", "name": "rating.css" },
                                                                            { "type": "file", "name": "rating.js" },
                                                                            { "type": "file", "name": "rating.min.css" },
                                                                            { "type": "file", "name": "rating.min.js" },
                                                                            { "type": "file", "name": "reset.css" },
                                                                            { "type": "file", "name": "reset.min.css" },
                                                                            { "type": "file", "name": "reveal.css" },
                                                                            { "type": "file", "name": "reveal.min.css" },
                                                                            { "type": "file", "name": "search.css" },
                                                                            { "type": "file", "name": "search.js" },
                                                                            { "type": "file", "name": "search.min.css" },
                                                                            { "type": "file", "name": "search.min.js" },
                                                                            { "type": "file", "name": "segment.css" },
                                                                            { "type": "file", "name": "segment.min.css" },
                                                                            { "type": "file", "name": "shape.css" },
                                                                            { "type": "file", "name": "shape.js" },
                                                                            { "type": "file", "name": "shape.min.css" },
                                                                            { "type": "file", "name": "shape.min.js" },
                                                                            { "type": "file", "name": "sidebar.css" },
                                                                            { "type": "file", "name": "sidebar.js" },
                                                                            { "type": "file", "name": "sidebar.min.css" },
                                                                            { "type": "file", "name": "sidebar.min.js" },
                                                                            { "type": "file", "name": "site.css" },
                                                                            { "type": "file", "name": "site.js" },
                                                                            { "type": "file", "name": "site.min.css" },
                                                                            { "type": "file", "name": "site.min.js" },
                                                                            { "type": "file", "name": "state.js" },
                                                                            { "type": "file", "name": "state.min.js" },
                                                                            { "type": "file", "name": "statistic.css" },
                                                                            { "type": "file", "name": "statistic.min.css" },
                                                                            { "type": "file", "name": "step.css" },
                                                                            { "type": "file", "name": "step.min.css" },
                                                                            { "type": "file", "name": "sticky.css" },
                                                                            { "type": "file", "name": "sticky.js" },
                                                                            { "type": "file", "name": "sticky.min.css" },
                                                                            { "type": "file", "name": "sticky.min.js" },
                                                                            { "type": "file", "name": "tab.css" },
                                                                            { "type": "file", "name": "tab.js" },
                                                                            { "type": "file", "name": "table.css" },
                                                                            { "type": "file", "name": "table.min.css" },
                                                                            { "type": "file", "name": "tab.min.css" },
                                                                            { "type": "file", "name": "tab.min.js" },
                                                                            { "type": "file", "name": "transition.css" },
                                                                            { "type": "file", "name": "transition.js" },
                                                                            { "type": "file", "name": "transition.min.css" },
                                                                            { "type": "file", "name": "transition.min.js" },
                                                                            { "type": "file", "name": "video.css" },
                                                                            { "type": "file", "name": "video.js" },
                                                                            { "type": "file", "name": "video.min.css" },
                                                                            { "type": "file", "name": "video.min.js" },
                                                                            { "type": "file", "name": "visibility.js" },
                                                                            { "type": "file", "name": "visibility.min.js" },
                                                                            { "type": "file", "name": "visit.js" },
                                                                            { "type": "file", "name": "visit.min.js" }
                                                                        ]
                                                                    },
                                                                    { "type": "file", "name": "LICENSE" },
                                                                    { "type": "file", "name": "package.js" },
                                                                    { "type": "file", "name": "package.json" },
                                                                    { "type": "file", "name": "README.md" },
                                                                    { "type": "file", "name": "semantic.css" },
                                                                    { "type": "file", "name": "semantic.js" },
                                                                    { "type": "file", "name": "semantic.min.css" },
                                                                    { "type": "file", "name": "semantic.min.js" },
                                                                    {
                                                                        "type": "directory", "name": "themes", "contents": [
                                                                            {
                                                                                "type": "directory", "name": "default", "contents": [
                                                                                    {
                                                                                        "type": "directory", "name": "assets", "contents": [
                                                                                            {
                                                                                                "type": "directory", "name": "fonts", "contents": [
                                                                                                    { "type": "file", "name": "icons.eot" },
                                                                                                    { "type": "file", "name": "icons.otf" },
                                                                                                    { "type": "file", "name": "icons.svg" },
                                                                                                    { "type": "file", "name": "icons.ttf" },
                                                                                                    { "type": "file", "name": "icons.woff" },
                                                                                                    { "type": "file", "name": "icons.woff2" }
                                                                                                ]
                                                                                            },
                                                                                            {
                                                                                                "type": "directory", "name": "images", "contents": [
                                                                                                    { "type": "file", "name": "flags.png" }
                                                                                                ]
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            { "type": "file", "name": "semantic-calendar.js" },
                                                            {
                                                                "type": "directory", "name": "typings", "contents": [
                                                                    {
                                                                        "type": "directory", "name": "angularjs", "contents": [
                                                                            { "type": "file", "name": "angular-animate.d.ts" },
                                                                            { "type": "file", "name": "angular-component-router.d.ts" },
                                                                            { "type": "file", "name": "angular-cookies.d.ts" },
                                                                            { "type": "file", "name": "angular.d.ts" },
                                                                            { "type": "file", "name": "angular-mocks.d.ts" },
                                                                            { "type": "file", "name": "angular-resource.d.ts" },
                                                                            { "type": "file", "name": "angular-route.d.ts" },
                                                                            { "type": "file", "name": "angular-sanitize.d.ts" }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "type": "directory", "name": "jquery", "contents": [
                                                                            { "type": "file", "name": "jquery.d.ts" }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "styles", "contents": [
                                                            { "type": "file", "name": "Base.css" },
                                                            {
                                                                "type": "directory", "name": "browsers", "contents": [
                                                                    { "type": "file", "name": "chrome.png" },
                                                                    { "type": "file", "name": "explorer.png" },
                                                                    { "type": "file", "name": "firefox.png" },
                                                                    { "type": "file", "name": "opera.png" },
                                                                    { "type": "file", "name": "yandex.png" },
                                                                    { "type": "file", "name": "yandex.svg" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "font-awesome", "contents": [
                                                                    {
                                                                        "type": "directory", "name": "css", "contents": [
                                                                            { "type": "file", "name": "font-awesome.css" },
                                                                            { "type": "file", "name": "font-awesome.min.css" }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "type": "directory", "name": "fonts", "contents": [
                                                                            { "type": "file", "name": "FontAwesome.otf" },
                                                                            { "type": "file", "name": "fontawesome-webfont.eot" },
                                                                            { "type": "file", "name": "fontawesome-webfont.svg" },
                                                                            { "type": "file", "name": "fontawesome-webfont.ttf" },
                                                                            { "type": "file", "name": "fontawesome-webfont.woff" },
                                                                            { "type": "file", "name": "fontawesome-webfont.woff2" }
                                                                        ]
                                                                    },
                                                                    { "type": "file", "name": "HELP-US-OUT.txt" },
                                                                    {
                                                                        "type": "directory", "name": "less", "contents": [
                                                                            { "type": "file", "name": "animated.less" },
                                                                            { "type": "file", "name": "bordered-pulled.less" },
                                                                            { "type": "file", "name": "core.less" },
                                                                            { "type": "file", "name": "fixed-width.less" },
                                                                            { "type": "file", "name": "font-awesome.less" },
                                                                            { "type": "file", "name": "icons.less" },
                                                                            { "type": "file", "name": "larger.less" },
                                                                            { "type": "file", "name": "list.less" },
                                                                            { "type": "file", "name": "mixins.less" },
                                                                            { "type": "file", "name": "path.less" },
                                                                            { "type": "file", "name": "rotated-flipped.less" },
                                                                            { "type": "file", "name": "screen-reader.less" },
                                                                            { "type": "file", "name": "stacked.less" },
                                                                            { "type": "file", "name": "variables.less" }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "type": "directory", "name": "scss", "contents": [
                                                                            { "type": "file", "name": "_animated.scss" },
                                                                            { "type": "file", "name": "_bordered-pulled.scss" },
                                                                            { "type": "file", "name": "_core.scss" },
                                                                            { "type": "file", "name": "_fixed-width.scss" },
                                                                            { "type": "file", "name": "font-awesome.scss" },
                                                                            { "type": "file", "name": "_icons.scss" },
                                                                            { "type": "file", "name": "_larger.scss" },
                                                                            { "type": "file", "name": "_list.scss" },
                                                                            { "type": "file", "name": "_mixins.scss" },
                                                                            { "type": "file", "name": "_path.scss" },
                                                                            { "type": "file", "name": "_rotated-flipped.scss" },
                                                                            { "type": "file", "name": "_screen-reader.scss" },
                                                                            { "type": "file", "name": "_stacked.scss" },
                                                                            { "type": "file", "name": "_variables.scss" }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "fonts", "contents": [
                                                                    { "type": "file", "name": "glyphicons-halflings-regular.eot" },
                                                                    { "type": "file", "name": "glyphicons-halflings-regular.svg" },
                                                                    { "type": "file", "name": "glyphicons-halflings-regular.ttf" },
                                                                    { "type": "file", "name": "glyphicons-halflings-regular.woff" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "images", "contents": [
                                                                    { "type": "file", "name": "fallback.png" },
                                                                    { "type": "file", "name": "favicon.ico" },
                                                                    { "type": "file", "name": "menu_back.jpg" },
                                                                    { "type": "file", "name": "mirsap_logo.png" },
                                                                    { "type": "file", "name": "noimage.png" }
                                                                ]
                                                            },
                                                            { "type": "file", "name": "Install.css" },
                                                            { "type": "file", "name": "loaders.css" },
                                                            { "type": "file", "name": "Loaders.less" },
                                                            { "type": "file", "name": "loaders.min.css" },
                                                            { "type": "file", "name": "pickmeup.css" },
                                                            { "type": "file", "name": "platform.css" },
                                                            { "type": "file", "name": "semantic-2.2.4.css" },
                                                            { "type": "file", "name": "semantic-2.2.4.min.css" },
                                                            { "type": "file", "name": "semantic-calendar.css" },
                                                            { "type": "file", "name": "signin.css" }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "views", "contents": [
                                                            { "type": "file", "name": "Index.cshtml" }
                                                        ]
                                                    }
                                                ]
                                            },
                                            { "type": "file", "name": "Ckrt.Platform.sln" },
                                            { "type": "file", "name": "Package.nuspec" }
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "directory", "name": "test", "contents": [
                                    { "type": "file", "name": "base.helper.ts" },
                                    { "type": "file", "name": "control.service.ts" },
                                    {
                                        "type": "directory", "name": "node_modules", "contents": [
                                            {
                                                "type": "directory", "name": "@types", "contents": [
                                                    {
                                                        "type": "directory", "name": "puppeteer", "contents": [
                                                            { "type": "file", "name": "index.d.ts" }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    { "type": "file", "name": "params.helper.ts" }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "directory", "name": "database", "contents": [
                            { "type": "file", "name": "README.md" },
                            {
                                "type": "directory", "name": "source", "contents": [
                                    {
                                        "type": "directory", "name": "Ckrt.Platform.Database", "contents": [
                                            { "type": "file", "name": "Ckrt.Platform.Database.csproj" },
                                            {
                                                "type": "directory", "name": "mssql", "contents": [
                                                    {
                                                        "type": "directory", "name": "after_create", "contents": [
                                                            { "type": "file", "name": "001_Main_SetDbParam.sql" },
                                                            { "type": "file", "name": "002_Main_CreateDbUsers.sql" },
                                                            { "type": "file", "name": "003_Main_CreateSystemProcs.sql" }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "after_update", "contents": [
                                                            { "type": "file", "name": "001_Main_StartAllJobs.sql" },
                                                            { "type": "file", "name": "002_Source_GrantAdmin.sql" }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "before_drop", "contents": [
                                                            { "type": "file", "name": "001_Main_CheckDropAbility.sql" },
                                                            { "type": "file", "name": "002_Source_RemoveReplication.sql" },
                                                            { "type": "file", "name": "003_Main_DropAllJobs.sql" }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "before_update", "contents": [
                                                            { "type": "file", "name": "001_Main_StopAllJobs.sql" }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "config", "contents": [
                                                            { "type": "file", "name": "develop.txt" },
                                                            { "type": "file", "name": "migr.txt" },
                                                            { "type": "file", "name": "platform.txt" },
                                                            { "type": "file", "name": "production.txt" },
                                                            { "type": "file", "name": "stage.txt" }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "migration", "contents": [
                                                            { "type": "file", "name": "01001.sql" }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "migrator", "contents": [
                                                            { "type": "file", "name": "AddMigration.sql" },
                                                            { "type": "file", "name": "CheckDb.sql" },
                                                            { "type": "file", "name": "CheckMigrationsTable.sql" },
                                                            { "type": "file", "name": "CreateDb.sql" },
                                                            { "type": "file", "name": "CreateMigrationsTable.sql" },
                                                            { "type": "file", "name": "DropDb.sql" },
                                                            { "type": "file", "name": "GetLastMigration.sql" },
                                                            { "type": "file", "name": "RestoreDb.sql" }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "procedure", "contents": [
                                                            { "type": "file", "name": "database_module_check.sql" },
                                                            { "type": "file", "name": "database_module_install.sql" }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "directory", "name": "pgsql", "contents": [
                                                    {
                                                        "type": "directory", "name": "after_create", "contents": [
                                                            { "type": "file", "name": "001_Main_CreateBaseObjects.sql" },
                                                            { "type": "file", "name": "002_Main_CreateSystemProcs.sql" },
                                                            { "type": "file", "name": "003_Main_SetDbParam.sql" },
                                                            { "type": "file", "name": "004_Main_CreateDbUsers.sql" }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "before_create", "contents": [
                                                            { "type": "file", "name": "000_Main_CreateUser.sql" }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "before_drop", "contents": [
                                                            { "type": "file", "name": "001_Main_CheckDropAbility.sql" }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "config", "contents": [
                                                            { "type": "file", "name": "develop.txt" },
                                                            { "type": "file", "name": "migr.txt" },
                                                            { "type": "file", "name": "platform.txt" },
                                                            { "type": "file", "name": "production.txt" },
                                                            { "type": "file", "name": "stage.txt" }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "migration", "contents": [
                                                            { "type": "file", "name": "01001.sql" },
                                                            { "type": "file", "name": "01002.sql" }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "migrator", "contents": [
                                                            { "type": "file", "name": "AddMigration.sql" },
                                                            { "type": "file", "name": "CheckDb.sql" },
                                                            { "type": "file", "name": "CheckMigrationsTable.sql" },
                                                            { "type": "file", "name": "CreateDb.sql" },
                                                            { "type": "file", "name": "CreateMigrationsTable.sql" },
                                                            { "type": "file", "name": "DropDb.sql" },
                                                            { "type": "file", "name": "GetLastMigration.sql" },
                                                            { "type": "file", "name": "RestoreDb.sql" }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "procedure", "contents": [
                                                            { "type": "file", "name": "database_module_check.sql" },
                                                            { "type": "file", "name": "database_module_install.sql" },
                                                            { "type": "file", "name": "database_param_get.sql" },
                                                            { "type": "file", "name": "database_param_set.sql" },
                                                            { "type": "file", "name": "database_table_exist.sql" },
                                                            {
                                                                "type": "directory", "name": "job", "contents": [
                                                                    { "type": "file", "name": "job_add.sql" },
                                                                    { "type": "file", "name": "job_drop.sql" },
                                                                    { "type": "file", "name": "job_get.sql" },
                                                                    { "type": "file", "name": "job_list.sql" },
                                                                    { "type": "file", "name": "job_schedule_add.sql" },
                                                                    { "type": "file", "name": "job_step_add.sql" },
                                                                    { "type": "file", "name": "job_switch.sql" }
                                                                ]
                                                            },
                                                            { "type": "file", "name": "xml_get_string.sql" },
                                                            { "type": "file", "name": "xml_get_text.sql" }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    { "type": "file", "name": "Ckrt.Platform.Database.sln" }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "directory", "name": "form", "contents": [
                            {
                                "type": "directory", "name": "build", "contents": [
                                    { "type": "file", "name": "build.bat" },
                                    { "type": "file", "name": "build.xml" },
                                    {
                                        "type": "directory", "name": "config", "contents": [
                                            { "type": "file", "name": "common.xml" },
                                            { "type": "file", "name": "development.xml" },
                                            { "type": "file", "name": "production.xml" },
                                            { "type": "file", "name": "version.xml" }
                                        ]
                                    }
                                ]
                            },
                            { "type": "file", "name": "README.md" },
                            {
                                "type": "directory", "name": "resource", "contents": [
                                    { "type": "file", "name": "nuget.exe" }
                                ]
                            },
                            {
                                "type": "directory", "name": "source", "contents": [
                                    {
                                        "type": "directory", "name": "Ckrt.Platform.Form", "contents": [
                                            {
                                                "type": "directory", "name": "Api", "contents": [
                                                    { "type": "file", "name": "FormActionApiHandler.cs" },
                                                    { "type": "file", "name": "FormAttachmentHandler.cs" },
                                                    { "type": "file", "name": "FormHandler.cs" },
                                                    { "type": "file", "name": "FormImageHandler.cs" },
                                                    { "type": "file", "name": "FormUnitParamValuesHandler.cs" },
                                                    { "type": "file", "name": "RouteHandler.cs" },
                                                    { "type": "file", "name": "SaveFormApiHandler.cs" }
                                                ]
                                            },
                                            { "type": "file", "name": "app.config" },
                                            { "type": "file", "name": "BundleTransformer.Configuration.xsd" },
                                            { "type": "file", "name": "Ckrt.Platform.Form.csproj" },
                                            {
                                                "type": "directory", "name": "client", "contents": [
                                                    {
                                                        "type": "directory", "name": "component", "contents": [
                                                            {
                                                                "type": "directory", "name": "actions", "contents": [
                                                                    { "type": "file", "name": "actions.component.css" },
                                                                    { "type": "file", "name": "actions.component.html" },
                                                                    { "type": "file", "name": "actions.component.js" },
                                                                    { "type": "file", "name": "actions.component.ts" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "default-actions", "contents": [
                                                                    { "type": "file", "name": "default-actions.component.css" },
                                                                    { "type": "file", "name": "default-actions.component.html" },
                                                                    { "type": "file", "name": "default-actions.component.js" },
                                                                    { "type": "file", "name": "default-actions.component.ts" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "details-section", "contents": [
                                                                    { "type": "file", "name": "details-section.component.css" },
                                                                    { "type": "file", "name": "details-section.component.html" },
                                                                    { "type": "file", "name": "details-section.component.js" },
                                                                    { "type": "file", "name": "details-section.component.ts" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "form", "contents": [
                                                                    { "type": "file", "name": "form.component.css" },
                                                                    { "type": "file", "name": "form.component.html" },
                                                                    { "type": "file", "name": "form.component.js" },
                                                                    { "type": "file", "name": "form.component.ts" }
                                                                ]
                                                            },
                                                            { "type": "file", "name": "parameters-row-sem.html" },
                                                            { "type": "file", "name": "parameters-row-sem.js" },
                                                            {
                                                                "type": "directory", "name": "params-section", "contents": [
                                                                    { "type": "file", "name": "params-section.component.css" },
                                                                    { "type": "file", "name": "params-section.component.html" },
                                                                    { "type": "file", "name": "params-section.component.js" },
                                                                    { "type": "file", "name": "params-section.component.ts" }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    { "type": "file", "name": "FormHelper.js" },
                                                    { "type": "file", "name": "form.page.html" },
                                                    {
                                                        "type": "directory", "name": "library", "contents": [
                                                            {
                                                                "type": "directory", "name": "angular-base64-upload", "contents": [
                                                                    { "type": "file", "name": "angular-base64-upload.js" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "angular-file-upload", "contents": [
                                                                    { "type": "file", "name": "angular-file-upload.js" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "angular-multi-select-tree", "contents": [
                                                                    { "type": "file", "name": "angular-multi-select-tree.css" },
                                                                    { "type": "file", "name": "angular-multi-select-tree.js" },
                                                                    { "type": "file", "name": "tree-item.tpl.html" },
                                                                    { "type": "file", "name": "tree.tpl.html" }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    { "type": "file", "name": "module.js" },
                                                    {
                                                        "type": "directory", "name": "resource", "contents": [
                                                            { "type": "file", "name": "gapi-fonts.css" }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "service", "contents": [
                                                            { "type": "file", "name": "DocHandlersConfig.js" },
                                                            { "type": "file", "name": "DocHandlersConfig.ts" },
                                                            { "type": "file", "name": "FormFilterService.js" },
                                                            { "type": "file", "name": "FormFilterService.ts" },
                                                            { "type": "file", "name": "MenuActionHandler.js" },
                                                            { "type": "file", "name": "MenuActionHandler.ts" },
                                                            {
                                                                "type": "directory", "name": "message", "contents": [
                                                                    { "type": "file", "name": "MenuActionMessage.js" },
                                                                    { "type": "file", "name": "MenuActionMessage.ts" }
                                                                ]
                                                            },
                                                            { "type": "file", "name": "register-handlers.js" },
                                                            { "type": "file", "name": "route.service.js" },
                                                            { "type": "file", "name": "UccBusinessHandlersConfig.js" },
                                                            { "type": "file", "name": "UccBusinessHandlersConfig.ts" }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "directory", "name": "Database", "contents": [
                                                    {
                                                        "type": "directory", "name": "mssql", "contents": [
                                                            {
                                                                "type": "directory", "name": "migration", "contents": [
                                                                    { "type": "file", "name": "01000_init.sql" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "procedure", "contents": [
                                                                    { "type": "file", "name": "form_action_get_by_id.sql" },
                                                                    { "type": "file", "name": "form_get_action.sql" },
                                                                    { "type": "file", "name": "form_get_attachment.sql" },
                                                                    { "type": "file", "name": "form_get_entry.sql" },
                                                                    { "type": "file", "name": "form_get.sql" },
                                                                    { "type": "file", "name": "form_get_unit.sql" },
                                                                    { "type": "file", "name": "form_id_from_list.sql" },
                                                                    { "type": "file", "name": "form_save_attachment.sql" },
                                                                    { "type": "file", "name": "form_unit_get_action.sql" },
                                                                    { "type": "file", "name": "form_unit_get_by_id.sql" },
                                                                    { "type": "file", "name": "form_unit_get_param.sql" },
                                                                    { "type": "file", "name": "form_unit_param_get_by_id.sql" }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "pgsql", "contents": [
                                                            {
                                                                "type": "directory", "name": "migration", "contents": [
                                                                    { "type": "file", "name": "01000_init.sql" },
                                                                    { "type": "file", "name": "01001_patch.sql" },
                                                                    { "type": "file", "name": "01002_patch.sql" },
                                                                    { "type": "file", "name": "01003_form_collapse.sql" },
                                                                    { "type": "file", "name": "01004_delete_attach.sql" },
                                                                    { "type": "file", "name": "01005_parse_attach.sql" },
                                                                    { "type": "file", "name": "01006_action_order.sql" },
                                                                    { "type": "file", "name": "01007_param_order.sql" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "procedure", "contents": [
                                                                    { "type": "file", "name": "form_action_get_by_id.sql" },
                                                                    { "type": "file", "name": "form_add_action.sql" },
                                                                    { "type": "file", "name": "form_add_entry.sql" },
                                                                    { "type": "file", "name": "form_add.sql" },
                                                                    { "type": "file", "name": "form_add_unit_action.sql" },
                                                                    { "type": "file", "name": "form_add_unit_param.sql" },
                                                                    { "type": "file", "name": "form_add_unit.sql" },
                                                                    { "type": "file", "name": "form_delete_attachment.sql" },
                                                                    { "type": "file", "name": "form_get_action.sql" },
                                                                    { "type": "file", "name": "form_get_attachment.sql" },
                                                                    { "type": "file", "name": "form_get_entry.sql" },
                                                                    { "type": "file", "name": "form_get.sql" },
                                                                    { "type": "file", "name": "form_get_unit.sql" },
                                                                    { "type": "file", "name": "form_save_attachment.sql" },
                                                                    { "type": "file", "name": "form_unit_get_action.sql" },
                                                                    { "type": "file", "name": "form_unit_get_by_id.sql" },
                                                                    { "type": "file", "name": "form_unit_get_param.sql" },
                                                                    { "type": "file", "name": "form_unit_param_get_by_id.sql" }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            { "type": "file", "name": "FormContainerExtensions.cs" },
                                            { "type": "file", "name": "FormEmbeddedModule.cs" },
                                            {
                                                "type": "directory", "name": "Handler", "contents": [
                                                    { "type": "file", "name": "ActionAccessCheckHandler.cs" },
                                                    {
                                                        "type": "directory", "name": "Db", "contents": [
                                                            { "type": "file", "name": "FormGetAttachmentHandler.cs" }
                                                        ]
                                                    },
                                                    { "type": "file", "name": "DefaultValueGetHandler.cs" },
                                                    { "type": "file", "name": "DeleteAttachmentHandler.cs" },
                                                    { "type": "file", "name": "FormActionGetByIdHandler.cs" },
                                                    { "type": "file", "name": "FormActionHandler.cs" },
                                                    { "type": "file", "name": "FormEntryGetExecHandler.cs" },
                                                    { "type": "file", "name": "FormGetActionHandler.cs" },
                                                    { "type": "file", "name": "FormGetEntryHandler.cs" },
                                                    { "type": "file", "name": "FormGetHandler.cs" },
                                                    { "type": "file", "name": "FormGetUnitHandler.cs" },
                                                    { "type": "file", "name": "FormUnitActionAccessCheckHandler.cs" },
                                                    { "type": "file", "name": "FormUnitGetAccessHandler.cs" },
                                                    { "type": "file", "name": "FormUnitGetActionHandler.cs" },
                                                    { "type": "file", "name": "FormUnitGetByIdHandler.cs" },
                                                    { "type": "file", "name": "FormUnitGetParamHandler.cs" },
                                                    { "type": "file", "name": "FormUnitParamAccessCheckHandler.cs" },
                                                    { "type": "file", "name": "FormUnitParamGetByIdHandler.cs" },
                                                    { "type": "file", "name": "FormValidateExecHandler.cs" },
                                                    { "type": "file", "name": "GetFormDataHandler.cs" },
                                                    { "type": "file", "name": "GetFormObjectHandler.cs" },
                                                    { "type": "file", "name": "GetFormUnitCtrlHandler.cs" },
                                                    { "type": "file", "name": "GetFormUnitParamDefaultValueHandler.cs" },
                                                    { "type": "file", "name": "GetFormUnitParamHandler.cs" },
                                                    { "type": "file", "name": "PrepareFormUnitHandler.cs" },
                                                    { "type": "file", "name": "SaveAttachmentHandler.cs" },
                                                    { "type": "file", "name": "SaveFormHandler.cs" },
                                                    { "type": "file", "name": "SerializeFormHandler.cs" },
                                                    { "type": "file", "name": "SourceValueGetHandler.cs" }
                                                ]
                                            },
                                            {
                                                "type": "directory", "name": "Message", "contents": [
                                                    { "type": "file", "name": "ActionAccessCheck.cs" },
                                                    {
                                                        "type": "directory", "name": "Db", "contents": [
                                                            { "type": "file", "name": "FormGetAttachment.cs" }
                                                        ]
                                                    },
                                                    { "type": "file", "name": "DefaultValueget.cs" },
                                                    { "type": "file", "name": "DeleteAttachment.cs" },
                                                    { "type": "file", "name": "FormActionGetById.cs" },
                                                    { "type": "file", "name": "FormActionMessage.cs" },
                                                    { "type": "file", "name": "FormEntryGetExec.cs" },
                                                    { "type": "file", "name": "FormGetAction.cs" },
                                                    { "type": "file", "name": "FormGet.cs" },
                                                    { "type": "file", "name": "FormGetEntry.cs" },
                                                    { "type": "file", "name": "FormGetUnit.cs" },
                                                    { "type": "file", "name": "FormUnitActionAccessCheck.cs" },
                                                    { "type": "file", "name": "FormUnitGetAccess.cs" },
                                                    { "type": "file", "name": "FormUnitGetAction.cs" },
                                                    { "type": "file", "name": "FormUnitGetById.cs" },
                                                    { "type": "file", "name": "FormUnitGetParam.cs" },
                                                    { "type": "file", "name": "FormUnitParamAccessCheck.cs" },
                                                    { "type": "file", "name": "FormUnitParamGetById.cs" },
                                                    { "type": "file", "name": "FormValidateExec.cs" },
                                                    { "type": "file", "name": "GetDocDetail.cs" },
                                                    { "type": "file", "name": "GetFormData.cs" },
                                                    { "type": "file", "name": "GetFormObject.cs" },
                                                    { "type": "file", "name": "GetFormUnitCtrl.cs" },
                                                    { "type": "file", "name": "GetFormUnitParam.cs" },
                                                    { "type": "file", "name": "GetFormUnitParamDefaultValue.cs" },
                                                    { "type": "file", "name": "GetFormUnitParams.cs" },
                                                    { "type": "file", "name": "ParseAttachment.cs" },
                                                    { "type": "file", "name": "ParseAttachmentException.cs" },
                                                    { "type": "file", "name": "PrepareFormUnit.cs" },
                                                    { "type": "file", "name": "SaveAttachment.cs" },
                                                    { "type": "file", "name": "SaveForm.cs" },
                                                    { "type": "file", "name": "SectionsMenu.cs" },
                                                    { "type": "file", "name": "SerializeForm.cs" },
                                                    { "type": "file", "name": "SourceValueGet.cs" }
                                                ]
                                            },
                                            {
                                                "type": "directory", "name": "Model", "contents": [
                                                    { "type": "file", "name": "ActionAccess.cs" },
                                                    { "type": "file", "name": "AutoNumber.cs" },
                                                    {
                                                        "type": "directory", "name": "Db", "contents": [
                                                            { "type": "file", "name": "FormAttachment.cs" }
                                                        ]
                                                    },
                                                    { "type": "file", "name": "DefaultValue.cs" },
                                                    { "type": "file", "name": "Doc.cs" },
                                                    { "type": "file", "name": "DocDetail.cs" },
                                                    { "type": "file", "name": "DocParameter.cs" },
                                                    { "type": "file", "name": "DocTypeParam.cs" },
                                                    { "type": "file", "name": "FormAction.cs" },
                                                    { "type": "file", "name": "FormData.cs" },
                                                    { "type": "file", "name": "FormEntry.cs" },
                                                    { "type": "file", "name": "FormEntryData.cs" },
                                                    { "type": "file", "name": "FormObject.cs" },
                                                    { "type": "file", "name": "FormUnitActionAccess.cs" },
                                                    { "type": "file", "name": "FormUnitAction.cs" },
                                                    { "type": "file", "name": "FormUnit.cs" },
                                                    { "type": "file", "name": "FormUnitObject.cs" },
                                                    { "type": "file", "name": "FormUnitParamAccess.cs" },
                                                    { "type": "file", "name": "FormUnitParam.cs" },
                                                    { "type": "file", "name": "FormUnitParamObject.cs" },
                                                    { "type": "file", "name": "FormUnitRow.cs" },
                                                    { "type": "file", "name": "FormValidate.cs" },
                                                    { "type": "file", "name": "ParamTypes.cs" },
                                                    { "type": "file", "name": "SourceValue.cs" },
                                                    { "type": "file", "name": "UnitAccess.cs" }
                                                ]
                                            },
                                            { "type": "file", "name": "packages.config" },
                                            {
                                                "type": "directory", "name": "Properties", "contents": [
                                                    { "type": "file", "name": "AssemblyInfo.cs" }
                                                ]
                                            },
                                            {
                                                "type": "directory", "name": "scripts", "contents": [
                                                    {
                                                        "type": "directory", "name": "typings", "contents": [
                                                            {
                                                                "type": "directory", "name": "angularjs", "contents": [
                                                                    { "type": "file", "name": "angular-animate.d.ts" },
                                                                    { "type": "file", "name": "angular-component-router.d.ts" },
                                                                    { "type": "file", "name": "angular-cookies.d.ts" },
                                                                    { "type": "file", "name": "angular.d.ts" },
                                                                    { "type": "file", "name": "angular-mocks.d.ts" },
                                                                    { "type": "file", "name": "angular-resource.d.ts" },
                                                                    { "type": "file", "name": "angular-route.d.ts" },
                                                                    { "type": "file", "name": "angular-sanitize.d.ts" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "angularLocalStorage", "contents": [
                                                                    { "type": "file", "name": "angularLocalStorage.d.ts" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "jquery", "contents": [
                                                                    { "type": "file", "name": "jquery.d.ts" }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    { "type": "file", "name": "Ckrt.Platform.Form.sln" }
                                ]
                            },
                            {
                                "type": "directory", "name": "test", "contents": [
                                    { "type": "file", "name": "form.helper.ts" }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "directory", "name": "map", "contents": [
                            {
                                "type": "directory", "name": "build", "contents": [
                                    { "type": "file", "name": "build.bat" },
                                    { "type": "file", "name": "build.xml" },
                                    {
                                        "type": "directory", "name": "config", "contents": [
                                            { "type": "file", "name": "common.xml" },
                                            { "type": "file", "name": "development.xml" },
                                            { "type": "file", "name": "production.xml" },
                                            { "type": "file", "name": "version.xml" }
                                        ]
                                    }
                                ]
                            },
                            { "type": "file", "name": "README.md" },
                            {
                                "type": "directory", "name": "resource", "contents": [
                                    { "type": "file", "name": "nuget.exe" }
                                ]
                            },
                            {
                                "type": "directory", "name": "source", "contents": [
                                    {
                                        "type": "directory", "name": "Ckrt.Platform.Map", "contents": [
                                            {
                                                "type": "directory", "name": "Api", "contents": [
                                                    { "type": "file", "name": "EventClientRegisterHandler.cs" },
                                                    { "type": "file", "name": "MapEventHandler.cs" },
                                                    { "type": "file", "name": "MapEventsHandler.cs" },
                                                    { "type": "file", "name": "MapLayersHandler.cs" },
                                                    { "type": "file", "name": "MapObjectHandler.cs" },
                                                    { "type": "file", "name": "MapObjectsHandler.cs" },
                                                    { "type": "file", "name": "RouteHandler.cs" }
                                                ]
                                            },
                                            { "type": "file", "name": "app.config" },
                                            { "type": "file", "name": "BundleTransformer.Configuration.xsd" },
                                            { "type": "file", "name": "Ckrt.Platform.Map.csproj" },
                                            {
                                                "type": "directory", "name": "client", "contents": [
                                                    {
                                                        "type": "directory", "name": "component", "contents": [
                                                            {
                                                                "type": "directory", "name": "event", "contents": [
                                                                    { "type": "file", "name": "event.component.css" },
                                                                    { "type": "file", "name": "event.component.html" },
                                                                    { "type": "file", "name": "event.component.js" },
                                                                    { "type": "file", "name": "event.component.ts" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "eventGrid", "contents": [
                                                                    { "type": "file", "name": "eventGrid.html" },
                                                                    { "type": "file", "name": "eventGrid.js" },
                                                                    { "type": "file", "name": "eventGrid.ts" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "gridView", "contents": [
                                                                    { "type": "file", "name": "gridView.html" },
                                                                    { "type": "file", "name": "gridView.js" },
                                                                    { "type": "file", "name": "gridView.ts" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "map", "contents": [
                                                                    { "type": "file", "name": "map.component.css" },
                                                                    { "type": "file", "name": "map.component.html" },
                                                                    { "type": "file", "name": "map.component.js" },
                                                                    { "type": "file", "name": "map.component.ts" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "object", "contents": [
                                                                    { "type": "file", "name": "object.component.html" },
                                                                    { "type": "file", "name": "object.component.js" },
                                                                    { "type": "file", "name": "object.component.ts" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "page", "contents": [
                                                                    { "type": "file", "name": "map.page.html" },
                                                                    { "type": "file", "name": "map.page.js" },
                                                                    { "type": "file", "name": "map.page.ts" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "yandex", "contents": [
                                                                    { "type": "file", "name": "yandexMap.css" },
                                                                    { "type": "file", "name": "yandexMap.html" },
                                                                    { "type": "file", "name": "yandexMap.js" },
                                                                    { "type": "file", "name": "yandexMap.ts" }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "control", "contents": [
                                                            { "type": "file", "name": "sticky.js" },
                                                            { "type": "file", "name": "sticky.ts" }
                                                        ]
                                                    },
                                                    { "type": "file", "name": "map.page.html" },
                                                    {
                                                        "type": "directory", "name": "model", "contents": [
                                                            { "type": "file", "name": "ICtrl.js" },
                                                            { "type": "file", "name": "ICtrl.ts" },
                                                            { "type": "file", "name": "IHttpEx.js" },
                                                            { "type": "file", "name": "IHttpEx.ts" },
                                                            { "type": "file", "name": "IMapObjectRequest.js" },
                                                            { "type": "file", "name": "IMapObjectRequest.ts" },
                                                            { "type": "file", "name": "IMapObjectResponse.js" },
                                                            { "type": "file", "name": "IMapObjectResponse.ts" },
                                                            { "type": "file", "name": "IMapParamServiceResponse.js" },
                                                            { "type": "file", "name": "IMapParamServiceResponse.ts" },
                                                            { "type": "file", "name": "Layer.js" },
                                                            { "type": "file", "name": "Layer.ts" },
                                                            { "type": "file", "name": "MapObject.js" },
                                                            { "type": "file", "name": "MapObject.ts" }
                                                        ]
                                                    },
                                                    { "type": "file", "name": "module.js" },
                                                    {
                                                        "type": "directory", "name": "node_modules", "contents": [
                                                            {
                                                                "type": "directory", "name": "@types", "contents": [
                                                                    {
                                                                        "type": "directory", "name": "angular", "contents": [
                                                                            { "type": "file", "name": "index.d.ts" }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "type": "directory", "name": "jquery", "contents": [
                                                                            { "type": "file", "name": "index.d.ts" }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "resource", "contents": [
                                                            { "type": "file", "name": "compile.js" },
                                                            {
                                                                "type": "directory", "name": "ya-map", "contents": [
                                                                    { "type": "file", "name": "ya-map-2.2.js" }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "service", "contents": [
                                                            { "type": "file", "name": "EventService.js" },
                                                            { "type": "file", "name": "EventService.ts" },
                                                            { "type": "file", "name": "MapParamService.js" },
                                                            { "type": "file", "name": "MapParamService.ts" },
                                                            { "type": "file", "name": "MapService.js" },
                                                            { "type": "file", "name": "MapService.ts" },
                                                            { "type": "file", "name": "route.service.js" }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "directory", "name": "Database", "contents": [
                                                    {
                                                        "type": "directory", "name": "mssql", "contents": [
                                                            {
                                                                "type": "directory", "name": "migration", "contents": [
                                                                    { "type": "file", "name": "01000.sql" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "procedure", "contents": [
                                                                    { "type": "file", "name": "map_event_get_info.sql" },
                                                                    { "type": "file", "name": "map_event.sql" },
                                                                    { "type": "file", "name": "map_event_stack_get.sql" },
                                                                    { "type": "file", "name": "map_get_layer.sql" },
                                                                    { "type": "file", "name": "map_get_object.sql" },
                                                                    { "type": "file", "name": "map_get.sql" },
                                                                    { "type": "file", "name": "map_object_get_info.sql" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "script", "contents": [
                                                                    { "type": "file", "name": "000000000_table.sql" },
                                                                    { "type": "file", "name": "000000001_procedure.sql" }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "pgsql", "contents": [
                                                            {
                                                                "type": "directory", "name": "migration", "contents": [
                                                                    { "type": "file", "name": "01000.sql" },
                                                                    { "type": "file", "name": "01001_patch.sql" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "procedure", "contents": [
                                                                    { "type": "file", "name": "map_event_get_info.sql" },
                                                                    { "type": "file", "name": "map_event.sql" },
                                                                    { "type": "file", "name": "map_event_stack_get.sql" },
                                                                    { "type": "file", "name": "map_get_layer.sql" },
                                                                    { "type": "file", "name": "map_get_object.sql" },
                                                                    { "type": "file", "name": "map_get.sql" },
                                                                    { "type": "file", "name": "map_object_get_info.sql" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "script", "contents": [
                                                                    { "type": "file", "name": "000000000_table.sql" },
                                                                    { "type": "file", "name": "000000001_procedure.sql" }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            { "type": "file", "name": "EventMessage.cs" },
                                            { "type": "file", "name": "EventMessagesSender.cs" },
                                            {
                                                "type": "directory", "name": "Handler", "contents": [
                                                    {
                                                        "type": "directory", "name": "Db", "contents": [
                                                            { "type": "file", "name": "MapEventStackGetHandler.cs" },
                                                            { "type": "file", "name": "MapGetHandler.cs" },
                                                            { "type": "file", "name": "MapGetLayerHandler.cs" },
                                                            { "type": "file", "name": "MapGetObjectHandler.cs" }
                                                        ]
                                                    },
                                                    { "type": "file", "name": "FindCoordsHandler.cs" },
                                                    { "type": "file", "name": "GetChildMapObjectsHandler.cs" },
                                                    { "type": "file", "name": "GetLayersHandler.cs" },
                                                    { "type": "file", "name": "SavePositionHandler.cs" }
                                                ]
                                            },
                                            { "type": "file", "name": "IMessagesService.cs" },
                                            { "type": "file", "name": "IWork.cs" },
                                            { "type": "file", "name": "IWorker.cs" },
                                            { "type": "file", "name": "MapContainerExtensions.cs" },
                                            { "type": "file", "name": "MapEmbeddedModule.cs" },
                                            {
                                                "type": "directory", "name": "Message", "contents": [
                                                    {
                                                        "type": "directory", "name": "Db", "contents": [
                                                            { "type": "file", "name": "MapEvent.cs" },
                                                            { "type": "file", "name": "MapEventStackGet.cs" },
                                                            { "type": "file", "name": "MapGet.cs" },
                                                            { "type": "file", "name": "MapgetLayer.cs" },
                                                            { "type": "file", "name": "MapGetObject.cs" }
                                                        ]
                                                    },
                                                    { "type": "file", "name": "FindCoords.cs" },
                                                    { "type": "file", "name": "GetChildMapObjects.cs" },
                                                    { "type": "file", "name": "GetLayers.cs" },
                                                    { "type": "file", "name": "SavePosition.cs" }
                                                ]
                                            },
                                            { "type": "file", "name": "MessagesHub.cs" },
                                            {
                                                "type": "directory", "name": "Model", "contents": [
                                                    { "type": "file", "name": "Map.cs" },
                                                    { "type": "file", "name": "MapEventData.cs" },
                                                    { "type": "file", "name": "MapLayer.cs" },
                                                    { "type": "file", "name": "MapObject.cs" }
                                                ]
                                            },
                                            { "type": "file", "name": "packages.config" },
                                            {
                                                "type": "directory", "name": "Properties", "contents": [
                                                    { "type": "file", "name": "AssemblyInfo.cs" }
                                                ]
                                            },
                                            {
                                                "type": "directory", "name": "Scripts", "contents": [
                                                    { "type": "file", "name": "jquery.signalR-2.2.2.js" },
                                                    { "type": "file", "name": "jquery.signalR-2.2.2.min.js" },
                                                    {
                                                        "type": "directory", "name": "typings", "contents": [
                                                            {
                                                                "type": "directory", "name": "moment", "contents": [
                                                                    { "type": "file", "name": "moment.d.ts" }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "directory", "name": "styles", "contents": [
                                                    {
                                                        "type": "directory", "name": "images", "contents": [
                                                            { "type": "file", "name": "dealerall.png" },
                                                            { "type": "file", "name": "defectall.png" },
                                                            { "type": "file", "name": "rcuzall.png" },
                                                            { "type": "file", "name": "terminalall.png" },
                                                            { "type": "file", "name": "terminal-off.png" },
                                                            { "type": "file", "name": "terminal-off-selected.png" },
                                                            { "type": "file", "name": "terminal.png" },
                                                            { "type": "file", "name": "terminal-selected.png" },
                                                            { "type": "file", "name": "trainmarker.png" },
                                                            { "type": "file", "name": "train.png" },
                                                            { "type": "file", "name": "videoall.png" }
                                                        ]
                                                    },
                                                    { "type": "file", "name": "Map.css" },
                                                    { "type": "file", "name": "runrow.css" }
                                                ]
                                            },
                                            { "type": "file", "name": "Worker.cs" }
                                        ]
                                    },
                                    { "type": "file", "name": "Ckrt.Platform.Map.sln" }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "directory", "name": "menu", "contents": [
                            {
                                "type": "directory", "name": "build", "contents": [
                                    { "type": "file", "name": "build.bat" },
                                    { "type": "file", "name": "build.xml" },
                                    {
                                        "type": "directory", "name": "config", "contents": [
                                            { "type": "file", "name": "common.xml" },
                                            { "type": "file", "name": "development.xml" },
                                            { "type": "file", "name": "production.xml" },
                                            { "type": "file", "name": "version.xml" }
                                        ]
                                    }
                                ]
                            },
                            { "type": "file", "name": "README.md" },
                            {
                                "type": "directory", "name": "resource", "contents": [
                                    { "type": "file", "name": "nuget.exe" }
                                ]
                            },
                            {
                                "type": "directory", "name": "source", "contents": [
                                    {
                                        "type": "directory", "name": "Ckrt.Platform.Menu", "contents": [
                                            {
                                                "type": "directory", "name": "Api", "contents": [
                                                    { "type": "file", "name": "MenuHandler.cs" }
                                                ]
                                            },
                                            { "type": "file", "name": "app.config" },
                                            { "type": "file", "name": "Ckrt.Platform.Menu.csproj" },
                                            {
                                                "type": "directory", "name": "client", "contents": [
                                                    {
                                                        "type": "directory", "name": "component", "contents": [
                                                            {
                                                                "type": "directory", "name": "main-menu", "contents": [
                                                                    { "type": "file", "name": "main-menu.component.css" },
                                                                    { "type": "file", "name": "main-menu.component.html" },
                                                                    { "type": "file", "name": "main-menu.component.ts" }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "dist", "contents": [
                                                            { "type": "file", "name": "menu.js" }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "node_modules", "contents": [
                                                            {
                                                                "type": "directory", "name": "@types", "contents": [
                                                                    {
                                                                        "type": "directory", "name": "angular", "contents": [
                                                                            { "type": "file", "name": "index.d.ts" },
                                                                            { "type": "file", "name": "package.json" },
                                                                            { "type": "file", "name": "README.md" }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "type": "directory", "name": "jquery", "contents": [
                                                                            { "type": "file", "name": "index.d.ts" },
                                                                            { "type": "file", "name": "package.json" },
                                                                            { "type": "file", "name": "README.md" }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    { "type": "file", "name": "package.json" },
                                                    {
                                                        "type": "directory", "name": "service", "contents": [
                                                            { "type": "file", "name": "menu.service.ts" }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "directory", "name": "database", "contents": [
                                                    {
                                                        "type": "directory", "name": "mssql", "contents": [
                                                            {
                                                                "type": "directory", "name": "migration", "contents": [
                                                                    { "type": "file", "name": "01000_init.sql" },
                                                                    { "type": "file", "name": "01001_sample_menu.sql" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "procedure", "contents": [
                                                                    { "type": "file", "name": "menu_get_items.sql" },
                                                                    { "type": "file", "name": "menu_get.sql" }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "pgsql", "contents": [
                                                            {
                                                                "type": "directory", "name": "migration", "contents": [
                                                                    { "type": "file", "name": "01000_init.sql" },
                                                                    { "type": "file", "name": "01001_Patch.sql" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "procedure", "contents": [
                                                                    { "type": "file", "name": "menu_add_item.sql" },
                                                                    { "type": "file", "name": "menu_get_items.sql" },
                                                                    { "type": "file", "name": "menu_get.sql" }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            { "type": "file", "name": "MenuContainerExtensions.cs" },
                                            { "type": "file", "name": "MenuEmbeddedModule.cs" },
                                            {
                                                "type": "directory", "name": "Model", "contents": [
                                                    { "type": "file", "name": "Menu.cs" },
                                                    { "type": "file", "name": "MenuItem.cs" }
                                                ]
                                            },
                                            { "type": "file", "name": "packages.config" },
                                            {
                                                "type": "directory", "name": "Properties", "contents": [
                                                    { "type": "file", "name": "AssemblyInfo.cs" }
                                                ]
                                            }
                                        ]
                                    },
                                    { "type": "file", "name": "Ckrt.Platform.Menu.sln" }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "directory", "name": "msbuild-target", "contents": [
                            { "type": "file", "name": "README.md" },
                            {
                                "type": "directory", "name": "resource", "contents": [
                                    {
                                        "type": "directory", "name": "inno-setup", "contents": [
                                            { "type": "file", "name": "Compil32.exe" },
                                            { "type": "file", "name": "Default.isl" },
                                            { "type": "file", "name": "isbunzip.dll" },
                                            { "type": "file", "name": "isbzip.dll" },
                                            { "type": "file", "name": "ISCC.exe" },
                                            { "type": "file", "name": "ISCmplr.dll" },
                                            { "type": "file", "name": "isfaq.htm" },
                                            { "type": "file", "name": "islzma32.exe" },
                                            { "type": "file", "name": "islzma64.exe" },
                                            { "type": "file", "name": "islzma.dll" },
                                            { "type": "file", "name": "ISPPBuiltins.iss" },
                                            { "type": "file", "name": "ISPP.dll" },
                                            { "type": "file", "name": "isscint.dll" },
                                            { "type": "file", "name": "isunzlib.dll" },
                                            { "type": "file", "name": "iszlib.dll" },
                                            {
                                                "type": "directory", "name": "Languages", "contents": [
                                                    { "type": "file", "name": "Russian.isl" }
                                                ]
                                            },
                                            { "type": "file", "name": "Setup.e32" },
                                            { "type": "file", "name": "SetupLdr.e32" },
                                            { "type": "file", "name": "WizModernImage.bmp" },
                                            { "type": "file", "name": "WizModernImage-IS.bmp" },
                                            { "type": "file", "name": "WizModernSmallImage.bmp" },
                                            { "type": "file", "name": "WizModernSmallImage-IS.bmp" }
                                        ]
                                    },
                                    { "type": "file", "name": "nuget.exe" }
                                ]
                            },
                            {
                                "type": "directory", "name": "source", "contents": [
                                    { "type": "file", "name": "clickOnce.xml" },
                                    { "type": "file", "name": "common.xml" },
                                    { "type": "file", "name": "database.xml" },
                                    { "type": "file", "name": "innoSetup.xml" },
                                    { "type": "file", "name": "msbuild14.bat" },
                                    { "type": "file", "name": "msbuild15.bat" },
                                    { "type": "file", "name": "nugetLibrary.xml" },
                                    { "type": "file", "name": "nuget.xml" },
                                    { "type": "file", "name": "nunitest.xml" },
                                    { "type": "file", "name": "testUI.xml" },
                                    { "type": "file", "name": "web.xml" }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "directory", "name": "report", "contents": [
                            {
                                "type": "directory", "name": "build", "contents": [
                                    { "type": "file", "name": "build.bat" },
                                    { "type": "file", "name": "build.xml" },
                                    {
                                        "type": "directory", "name": "config", "contents": [
                                            { "type": "file", "name": "common.xml" },
                                            { "type": "file", "name": "development.xml" },
                                            { "type": "file", "name": "production.xml" },
                                            { "type": "file", "name": "version.xml" }
                                        ]
                                    }
                                ]
                            },
                            { "type": "file", "name": "Detail.md" },
                            { "type": "file", "name": "README.md" },
                            {
                                "type": "directory", "name": "resource", "contents": [
                                    { "type": "file", "name": "nuget.exe" }
                                ]
                            },
                            {
                                "type": "directory", "name": "source", "contents": [
                                    {
                                        "type": "directory", "name": "Ckrt.Platform.Report", "contents": [
                                            {
                                                "type": "directory", "name": "Api", "contents": [
                                                    { "type": "file", "name": "DependParamHandler.cs" },
                                                    { "type": "file", "name": "LazySelectHandler.cs" },
                                                    { "type": "file", "name": "ReportActionHandler.cs" },
                                                    { "type": "file", "name": "ReportDefaultValuesHandler.cs" },
                                                    { "type": "file", "name": "ReportFilterHandler.cs" },
                                                    { "type": "file", "name": "ReportHandler.cs" },
                                                    { "type": "file", "name": "RouteHandler.cs" }
                                                ]
                                            },
                                            { "type": "file", "name": "app.config" },
                                            { "type": "file", "name": "Ckrt.Platform.Report.csproj" },
                                            {
                                                "type": "directory", "name": "client", "contents": [
                                                    {
                                                        "type": "directory", "name": "component", "contents": [
                                                            {
                                                                "type": "directory", "name": "action", "contents": [
                                                                    { "type": "file", "name": "reportAction.html" },
                                                                    { "type": "file", "name": "reportAction.js" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "journal", "contents": [
                                                                    { "type": "file", "name": "reportContent.html" },
                                                                    { "type": "file", "name": "reportContent.js" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "pivot", "contents": [
                                                                    { "type": "file", "name": "Pivot.css" },
                                                                    { "type": "file", "name": "reportPivot.html" },
                                                                    { "type": "file", "name": "reportPivot.js" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "report", "contents": [
                                                                    { "type": "file", "name": "print.css" },
                                                                    { "type": "file", "name": "printCtrl.js" },
                                                                    { "type": "file", "name": "print-only.css" },
                                                                    { "type": "file", "name": "Report.css" },
                                                                    { "type": "file", "name": "report.html" },
                                                                    { "type": "file", "name": "report.js" },
                                                                    { "type": "file", "name": "screen-only.css" }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "control", "contents": [
                                                            { "type": "file", "name": "angular-ajaxselect2.js" },
                                                            { "type": "file", "name": "angular-autocomplete.js" },
                                                            { "type": "file", "name": "angular-fancybox.js" },
                                                            { "type": "file", "name": "angular-select2.js" },
                                                            { "type": "file", "name": "angular-spinedit.js" },
                                                            { "type": "file", "name": "angular-sticky.js" },
                                                            { "type": "file", "name": "angular-table-column-fix.js" }
                                                        ]
                                                    },
                                                    { "type": "file", "name": "default-page.html" },
                                                    {
                                                        "type": "directory", "name": "helper", "contents": [
                                                            { "type": "file", "name": "ReportContentHelper.js" },
                                                            { "type": "file", "name": "ReportContentHelper.ts" }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "library", "contents": [
                                                            {
                                                                "type": "directory", "name": "bootstrap", "contents": [
                                                                    { "type": "file", "name": "bootstrap-datepicker.js" },
                                                                    { "type": "file", "name": "bootstrap-spinedit.css" },
                                                                    { "type": "file", "name": "bootstrap-spinedit.js" },
                                                                    { "type": "file", "name": "combobox.js" },
                                                                    { "type": "file", "name": "datepicker.css" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "jquery", "contents": [
                                                                    {
                                                                        "type": "directory", "name": "scripts", "contents": [
                                                                            { "type": "file", "name": "jquery.ba-resize.js" },
                                                                            { "type": "file", "name": "jquery.fancybox-1.3.4.js" },
                                                                            { "type": "file", "name": "jquery.inputmask.js" },
                                                                            { "type": "file", "name": "jquery.inputmask.regex.extensions.js" },
                                                                            { "type": "file", "name": "jquery-ui-1.11.4.js" },
                                                                            { "type": "file", "name": "jquery-ui-1.11.4.min.js" },
                                                                            { "type": "file", "name": "jquery.validate.js" },
                                                                            { "type": "file", "name": "jquery.validate.unobtrusive.js" },
                                                                            { "type": "file", "name": "jquery.validate.unobtrusive.min.js" },
                                                                            { "type": "file", "name": "jquery.validate-vsdoc.js" }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "type": "directory", "name": "styles", "contents": [
                                                                            {
                                                                                "type": "directory", "name": "fancybox", "contents": [
                                                                                    { "type": "file", "name": "blank.gif" },
                                                                                    { "type": "file", "name": "fancybox.png" },
                                                                                    { "type": "file", "name": "fancybox-x.png" },
                                                                                    { "type": "file", "name": "fancybox-y.png" },
                                                                                    { "type": "file", "name": "fancy_close.png" },
                                                                                    { "type": "file", "name": "fancy_loading.png" },
                                                                                    { "type": "file", "name": "fancy_nav_left.png" },
                                                                                    { "type": "file", "name": "fancy_nav_right.png" },
                                                                                    { "type": "file", "name": "fancy_shadow_e.png" },
                                                                                    { "type": "file", "name": "fancy_shadow_ne.png" },
                                                                                    { "type": "file", "name": "fancy_shadow_n.png" },
                                                                                    { "type": "file", "name": "fancy_shadow_nw.png" },
                                                                                    { "type": "file", "name": "fancy_shadow_se.png" },
                                                                                    { "type": "file", "name": "fancy_shadow_s.png" },
                                                                                    { "type": "file", "name": "fancy_shadow_sw.png" },
                                                                                    { "type": "file", "name": "fancy_shadow_w.png" },
                                                                                    { "type": "file", "name": "fancy_title_left.png" },
                                                                                    { "type": "file", "name": "fancy_title_main.png" },
                                                                                    { "type": "file", "name": "fancy_title_over.png" },
                                                                                    { "type": "file", "name": "fancy_title_right.png" },
                                                                                    { "type": "file", "name": "jquery.fancybox-1.3.4.css" }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "type": "directory", "name": "images", "contents": [
                                                                                    { "type": "file", "name": "ui-bg_flat_0_aaaaaa_40x100.png" },
                                                                                    { "type": "file", "name": "ui-bg_flat_75_ffffff_40x100.png" },
                                                                                    { "type": "file", "name": "ui-bg_glass_55_fbf9ee_1x400.png" },
                                                                                    { "type": "file", "name": "ui-bg_glass_65_ffffff_1x400.png" },
                                                                                    { "type": "file", "name": "ui-bg_glass_75_dadada_1x400.png" },
                                                                                    { "type": "file", "name": "ui-bg_glass_75_e6e6e6_1x400.png" },
                                                                                    { "type": "file", "name": "ui-bg_glass_95_fef1ec_1x400.png" },
                                                                                    { "type": "file", "name": "ui-bg_highlight-soft_75_cccccc_1x100.png" },
                                                                                    { "type": "file", "name": "ui-icons_222222_256x240.png" },
                                                                                    { "type": "file", "name": "ui-icons_2e83ff_256x240.png" },
                                                                                    { "type": "file", "name": "ui-icons_454545_256x240.png" },
                                                                                    { "type": "file", "name": "ui-icons_888888_256x240.png" },
                                                                                    { "type": "file", "name": "ui-icons_cd0a0a_256x240.png" }
                                                                                ]
                                                                            },
                                                                            { "type": "file", "name": "jquery-ui.css" },
                                                                            { "type": "file", "name": "jquery-ui.structure.css" },
                                                                            { "type": "file", "name": "jquery-ui.theme.css" }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "select2", "contents": [
                                                                    {
                                                                        "type": "directory", "name": "scripts", "contents": [
                                                                            { "type": "file", "name": "ru.js" },
                                                                            { "type": "file", "name": "select2.js" },
                                                                            { "type": "file", "name": "select2_locale_ru.js" }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "type": "directory", "name": "styles", "contents": [
                                                                            { "type": "file", "name": "select2-bootstrap.css" },
                                                                            { "type": "file", "name": "select2.css" },
                                                                            { "type": "file", "name": "select2.min.css" },
                                                                            { "type": "file", "name": "select2.png" },
                                                                            { "type": "file", "name": "select2x2.png" }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "service", "contents": [
                                                            { "type": "file", "name": "reportContentService.js" },
                                                            { "type": "file", "name": "ReportFilterService.js" },
                                                            { "type": "file", "name": "ReportFilterService.ts" },
                                                            { "type": "file", "name": "reportRouteService.js" },
                                                            { "type": "file", "name": "reportService.js" }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "directory", "name": "Database", "contents": [
                                                    {
                                                        "type": "directory", "name": "mssql", "contents": [
                                                            {
                                                                "type": "directory", "name": "function", "contents": [
                                                                    { "type": "file", "name": "report_get_default_server.sql" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "migration", "contents": [
                                                                    { "type": "file", "name": "01000.sql" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "procedure", "contents": [
                                                                    { "type": "file", "name": "report_action_get_by_report.sql" },
                                                                    { "type": "file", "name": "report_get_action.sql" },
                                                                    { "type": "file", "name": "report_get_format.sql" },
                                                                    { "type": "file", "name": "report_get_param.sql" },
                                                                    { "type": "file", "name": "report_get_route.sql" },
                                                                    { "type": "file", "name": "report_get_server.sql" },
                                                                    { "type": "file", "name": "report_get.sql" },
                                                                    { "type": "file", "name": "report_param_get_by_report.sql" },
                                                                    { "type": "file", "name": "report_param_get_current_day.sql" },
                                                                    { "type": "file", "name": "report_param_get_month_first_day.sql" }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "pgsql", "contents": [
                                                            {
                                                                "type": "directory", "name": "function", "contents": [
                                                                    { "type": "file", "name": "report_get_default_server.sql" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "migration", "contents": [
                                                                    { "type": "file", "name": "01000_Init.sql" },
                                                                    { "type": "file", "name": "01001_DefaultAction.sql" },
                                                                    { "type": "file", "name": "01002_Patch.sql" },
                                                                    { "type": "file", "name": "01003_Patch.sql" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "procedure", "contents": [
                                                                    { "type": "file", "name": "report_action_get_by_report.sql" },
                                                                    { "type": "file", "name": "report_add_action.sql" },
                                                                    { "type": "file", "name": "report_add_param.sql" },
                                                                    { "type": "file", "name": "report_add.sql" },
                                                                    { "type": "file", "name": "report_get_action.sql" },
                                                                    { "type": "file", "name": "report_get_format.sql" },
                                                                    { "type": "file", "name": "report_get_param.sql" },
                                                                    { "type": "file", "name": "report_get_route.sql" },
                                                                    { "type": "file", "name": "report_get_server.sql" },
                                                                    { "type": "file", "name": "report_get.sql" },
                                                                    { "type": "file", "name": "report_param_get_by_report.sql" },
                                                                    { "type": "file", "name": "report_param_get_current_day.sql" },
                                                                    { "type": "file", "name": "report_param_get_month_first_day.sql" }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            { "type": "file", "name": "GetAllTablesHandler.cs" },
                                            {
                                                "type": "directory", "name": "Handler", "contents": [
                                                    { "type": "file", "name": "CreateFilterControlHandler.cs" },
                                                    { "type": "file", "name": "CreateMobileReportHandler.cs" },
                                                    { "type": "file", "name": "CreateOldReportHandler.cs" },
                                                    { "type": "file", "name": "CreatePivotHandler.cs" },
                                                    { "type": "file", "name": "CreateTableHandler.cs" },
                                                    {
                                                        "type": "directory", "name": "Db", "contents": [
                                                            { "type": "file", "name": "DefaultValueGetHandler.cs" },
                                                            { "type": "file", "name": "ReportActionGetByReportHandler.cs" },
                                                            { "type": "file", "name": "ReportGetActionHandler.cs" },
                                                            { "type": "file", "name": "ReportGetDataHandler.cs" },
                                                            { "type": "file", "name": "ReportGetFormatHandler.cs" },
                                                            { "type": "file", "name": "ReportGetHandler.cs" },
                                                            { "type": "file", "name": "ReportGetParamHandler.cs" },
                                                            { "type": "file", "name": "ReportGetRouteHandler.cs" },
                                                            { "type": "file", "name": "ReportGetServerHandler.cs" },
                                                            { "type": "file", "name": "ReportInsertLogHandler.cs" },
                                                            { "type": "file", "name": "ReportParamGetByReportHandler.cs" },
                                                            { "type": "file", "name": "SourceValueGetHandler.cs" }
                                                        ]
                                                    },
                                                    { "type": "file", "name": "DynamicDictionaryExtensions.cs" },
                                                    { "type": "file", "name": "GetCloseXmlExcelReportHandler.cs" },
                                                    { "type": "file", "name": "GetDefaultValueHandler.cs" },
                                                    { "type": "file", "name": "GetExcelReportHandler.cs" },
                                                    { "type": "file", "name": "GetExportReportHandler.cs" },
                                                    { "type": "file", "name": "GetReportHandler.cs" },
                                                    { "type": "file", "name": "GetReportLogHandler.cs" },
                                                    { "type": "file", "name": "GetReportParametersHandler.cs" },
                                                    { "type": "file", "name": "HeaderCell.cs" },
                                                    { "type": "file", "name": "Header.cs" },
                                                    { "type": "file", "name": "NewGetPivotHandler.cs" },
                                                    {
                                                        "type": "directory", "name": "Object", "contents": [
                                                            { "type": "file", "name": "ctrl.cs" },
                                                            { "type": "file", "name": "DefaultValue.cs" },
                                                            { "type": "file", "name": "ReportAction.cs" },
                                                            { "type": "file", "name": "ReportData.cs" },
                                                            { "type": "file", "name": "ReportFormat.cs" },
                                                            { "type": "file", "name": "ReportObj.cs" },
                                                            { "type": "file", "name": "ReportParam.cs" },
                                                            { "type": "file", "name": "ReportRouteObj.cs" },
                                                            { "type": "file", "name": "ReportServer.cs" },
                                                            { "type": "file", "name": "SourceValue.cs" }
                                                        ]
                                                    },
                                                    { "type": "file", "name": "ParseXmlHandler.cs" }
                                                ]
                                            },
                                            {
                                                "type": "directory", "name": "Message", "contents": [
                                                    { "type": "file", "name": "CreateFilterControl.cs" },
                                                    { "type": "file", "name": "CreateMobileReport.cs" },
                                                    { "type": "file", "name": "CreateOldReport.cs" },
                                                    { "type": "file", "name": "CreatePivot.cs" },
                                                    { "type": "file", "name": "CreateTable.cs" },
                                                    {
                                                        "type": "directory", "name": "Db", "contents": [
                                                            { "type": "file", "name": "DefaultValueGet.cs" },
                                                            { "type": "file", "name": "ReportActionGetByReport.cs" },
                                                            { "type": "file", "name": "ReportGetAction.cs" },
                                                            { "type": "file", "name": "ReportGet.cs" },
                                                            { "type": "file", "name": "ReportGetData.cs" },
                                                            { "type": "file", "name": "ReportGetFormat.cs" },
                                                            { "type": "file", "name": "ReportGetParam.cs" },
                                                            { "type": "file", "name": "ReportGetRoute.cs" },
                                                            { "type": "file", "name": "ReportGetServer.cs" },
                                                            { "type": "file", "name": "ReportInsertLog.cs" },
                                                            { "type": "file", "name": "ReportParamGetByReport.cs" },
                                                            { "type": "file", "name": "SourceValueGet.cs" }
                                                        ]
                                                    },
                                                    { "type": "file", "name": "GetDefaultValue.cs" },
                                                    { "type": "file", "name": "GetExcelReport.cs" },
                                                    { "type": "file", "name": "GetExportReport.cs" },
                                                    { "type": "file", "name": "GetPivot.cs" },
                                                    { "type": "file", "name": "GetReportData.cs" },
                                                    { "type": "file", "name": "GetReportParameters.cs" },
                                                    { "type": "file", "name": "ParseXml.cs" }
                                                ]
                                            },
                                            {
                                                "type": "directory", "name": "Model", "contents": [
                                                    { "type": "file", "name": "Cell.cs" },
                                                    { "type": "file", "name": "FieldNameObject.cs" },
                                                    { "type": "file", "name": "FilterControlHelper.cs" },
                                                    { "type": "file", "name": "HeaderKeys.cs" },
                                                    { "type": "file", "name": "HeaderMeta.cs" },
                                                    { "type": "file", "name": "ICell.cs" },
                                                    { "type": "file", "name": "IField.cs" },
                                                    { "type": "file", "name": "IName.cs" },
                                                    { "type": "file", "name": "KeySet.cs" },
                                                    { "type": "file", "name": "MultiCell.cs" },
                                                    { "type": "file", "name": "NewPivotHandlerHelper.cs" },
                                                    { "type": "file", "name": "ParamTypes.cs" },
                                                    { "type": "file", "name": "SerializeHelper.cs" },
                                                    { "type": "file", "name": "ValueObject.cs" }
                                                ]
                                            },
                                            { "type": "file", "name": "Package.nuspec" },
                                            { "type": "file", "name": "packages.config" },
                                            {
                                                "type": "directory", "name": "Properties", "contents": [
                                                    { "type": "file", "name": "AssemblyInfo.cs" }
                                                ]
                                            },
                                            { "type": "file", "name": "ReportContainerExtensions.cs" },
                                            { "type": "file", "name": "ReportEmbeddedModule.cs" }
                                        ]
                                    },
                                    { "type": "file", "name": "Ckrt.Platform.Report.sln" }
                                ]
                            },
                            {
                                "type": "directory", "name": "test", "contents": [
                                    { "type": "file", "name": "report.helper.ts" }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "directory", "name": "search", "contents": [
                            {
                                "type": "directory", "name": "build", "contents": [
                                    { "type": "file", "name": "build.bat" },
                                    { "type": "file", "name": "build.xml" },
                                    {
                                        "type": "directory", "name": "config", "contents": [
                                            { "type": "file", "name": "common.xml" },
                                            { "type": "file", "name": "development.xml" },
                                            { "type": "file", "name": "production.xml" },
                                            { "type": "file", "name": "version.xml" }
                                        ]
                                    }
                                ]
                            },
                            { "type": "file", "name": "README.md" },
                            {
                                "type": "directory", "name": "resource", "contents": [
                                    { "type": "file", "name": "nuget.exe" }
                                ]
                            },
                            {
                                "type": "directory", "name": "source", "contents": [
                                    {
                                        "type": "directory", "name": "Ckrt.Platform.Search", "contents": [
                                            {
                                                "type": "directory", "name": "Api", "contents": [
                                                    { "type": "file", "name": "RouteHandler.cs" },
                                                    { "type": "file", "name": "SearchHandler.cs" }
                                                ]
                                            },
                                            { "type": "file", "name": "app.config" },
                                            { "type": "file", "name": "Ckrt.Platform.Search.csproj" },
                                            {
                                                "type": "directory", "name": "client", "contents": [
                                                    {
                                                        "type": "directory", "name": "component", "contents": [
                                                            {
                                                                "type": "directory", "name": "search", "contents": [
                                                                    {
                                                                        "type": "directory", "name": "model", "contents": [
                                                                            { "type": "file", "name": "ISearch.js" },
                                                                            { "type": "file", "name": "ISearchModel.js" },
                                                                            { "type": "file", "name": "ISearchModel.ts" },
                                                                            { "type": "file", "name": "ISearchResult.js" },
                                                                            { "type": "file", "name": "ISearchResult.ts" },
                                                                            { "type": "file", "name": "ISearch.ts" }
                                                                        ]
                                                                    },
                                                                    { "type": "file", "name": "search.component.css" },
                                                                    { "type": "file", "name": "search.component.html" },
                                                                    { "type": "file", "name": "search.component.js" },
                                                                    { "type": "file", "name": "search.component.ts" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "search-widget", "contents": [
                                                                    { "type": "file", "name": "search-widget.component.css" },
                                                                    { "type": "file", "name": "search-widget.component.html" },
                                                                    { "type": "file", "name": "search-widget.component.js" },
                                                                    { "type": "file", "name": "search-widget.component.ts" },
                                                                    { "type": "file", "name": "search-widget.transparent.component.html" }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    { "type": "file", "name": "search.page.html" },
                                                    {
                                                        "type": "directory", "name": "service", "contents": [
                                                            { "type": "file", "name": "route.service.js" },
                                                            { "type": "file", "name": "search.service.js" },
                                                            { "type": "file", "name": "search.service.ts" }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "directory", "name": "database", "contents": [
                                                    {
                                                        "type": "directory", "name": "mssql", "contents": [
                                                            {
                                                                "type": "directory", "name": "migration", "contents": [
                                                                    { "type": "file", "name": "01000_Init.sql" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "procedure", "contents": [
                                                                    { "type": "file", "name": "search_get.sql" }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "pgsql", "contents": [
                                                            {
                                                                "type": "directory", "name": "migration", "contents": [
                                                                    { "type": "file", "name": "01000_Init.sql" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "procedure", "contents": [
                                                                    { "type": "file", "name": "search_get.sql" }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "directory", "name": "Handlers", "contents": [
                                                    { "type": "file", "name": "GetSearchProvidersHandler.cs" },
                                                    { "type": "file", "name": "GetSearchResultHandler.cs" }
                                                ]
                                            },
                                            {
                                                "type": "directory", "name": "Messages", "contents": [
                                                    { "type": "file", "name": "GetSearchProvidersMessage.cs" },
                                                    { "type": "file", "name": "GetSearchResultMessage.cs" }
                                                ]
                                            },
                                            {
                                                "type": "directory", "name": "Models", "contents": [
                                                    { "type": "file", "name": "SearchProvider.cs" },
                                                    { "type": "file", "name": "SearchResult.cs" }
                                                ]
                                            },
                                            { "type": "file", "name": "packages.config" },
                                            {
                                                "type": "directory", "name": "Properties", "contents": [
                                                    { "type": "file", "name": "AssemblyInfo.cs" }
                                                ]
                                            },
                                            {
                                                "type": "directory", "name": "Scripts", "contents": [
                                                    {
                                                        "type": "directory", "name": "typings", "contents": [
                                                            {
                                                                "type": "directory", "name": "angularjs", "contents": [
                                                                    { "type": "file", "name": "angular-animate.d.ts" },
                                                                    { "type": "file", "name": "angular-component-router.d.ts" },
                                                                    { "type": "file", "name": "angular-cookies.d.ts" },
                                                                    { "type": "file", "name": "angular.d.ts" },
                                                                    { "type": "file", "name": "angular-mocks.d.ts" },
                                                                    { "type": "file", "name": "angular-resource.d.ts" },
                                                                    { "type": "file", "name": "angular-route.d.ts" },
                                                                    { "type": "file", "name": "angular-sanitize.d.ts" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "jquery", "contents": [
                                                                    { "type": "file", "name": "jquery.d.ts" }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            { "type": "file", "name": "SearchContainerExtensions.cs" },
                                            { "type": "file", "name": "SearchEmbeddedModule.cs" }
                                        ]
                                    },
                                    { "type": "file", "name": "Ckrt.Platform.Search.sln" }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "directory", "name": "security", "contents": [
                            {
                                "type": "directory", "name": "build", "contents": [
                                    { "type": "file", "name": "build.bat" },
                                    { "type": "file", "name": "build.xml" },
                                    {
                                        "type": "directory", "name": "config", "contents": [
                                            { "type": "file", "name": "common.xml" },
                                            { "type": "file", "name": "development.xml" },
                                            { "type": "file", "name": "production.xml" },
                                            { "type": "file", "name": "version.xml" }
                                        ]
                                    }
                                ]
                            },
                            { "type": "file", "name": "README.md" },
                            {
                                "type": "directory", "name": "resource", "contents": [
                                    { "type": "file", "name": "nuget.exe" }
                                ]
                            },
                            {
                                "type": "directory", "name": "source", "contents": [
                                    {
                                        "type": "directory", "name": "Ckrt.Platform.Security", "contents": [
                                            {
                                                "type": "directory", "name": "Api", "contents": [
                                                    { "type": "file", "name": "LoginHandler.cs" },
                                                    { "type": "file", "name": "LogoutHandler.cs" },
                                                    { "type": "file", "name": "RedirectUnauthorizedHandler.cs" },
                                                    { "type": "file", "name": "RouteHandler.cs" }
                                                ]
                                            },
                                            { "type": "file", "name": "app.config" },
                                            { "type": "file", "name": "Ckrt.Platform.Security.csproj" },
                                            {
                                                "type": "directory", "name": "client", "contents": [
                                                    {
                                                        "type": "directory", "name": "component", "contents": [
                                                            {
                                                                "type": "directory", "name": "login", "contents": [
                                                                    { "type": "file", "name": "login.component.html" },
                                                                    { "type": "file", "name": "login.component.js" },
                                                                    { "type": "file", "name": "login.component.ts" }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    { "type": "file", "name": "login.page.html" },
                                                    {
                                                        "type": "directory", "name": "model", "contents": [
                                                            { "type": "file", "name": "IToken.js" },
                                                            { "type": "file", "name": "IToken.ts" },
                                                            { "type": "file", "name": "IUser.js" },
                                                            { "type": "file", "name": "IUser.ts" }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "service", "contents": [
                                                            { "type": "file", "name": "login.service.js" },
                                                            { "type": "file", "name": "login.service.ts" },
                                                            { "type": "file", "name": "route.service.js" },
                                                            { "type": "file", "name": "token.service.js" },
                                                            { "type": "file", "name": "token.service.ts" }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "directory", "name": "database", "contents": [
                                                    {
                                                        "type": "directory", "name": "mssql", "contents": [
                                                            {
                                                                "type": "directory", "name": "migration", "contents": [
                                                                    { "type": "file", "name": "01000_Init.sql" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "procedure", "contents": [
                                                                    { "type": "file", "name": "fn_secur_get_user.sql" },
                                                                    { "type": "file", "name": "secur_auth.sql" },
                                                                    { "type": "file", "name": "secur_get_user.sql" },
                                                                    { "type": "file", "name": "secur_granted.sql" }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "pgsql", "contents": [
                                                            {
                                                                "type": "directory", "name": "migration", "contents": [
                                                                    { "type": "file", "name": "01000_Init.sql" },
                                                                    { "type": "file", "name": "01001_Patch.sql" },
                                                                    { "type": "file", "name": "01002_Patch.sql" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "procedure", "contents": [
                                                                    { "type": "file", "name": "secur_add_grant.sql" },
                                                                    { "type": "file", "name": "secur_add_task.sql" },
                                                                    { "type": "file", "name": "secur_auth.sql" },
                                                                    { "type": "file", "name": "secur_get_user.sql" },
                                                                    { "type": "file", "name": "secur_granted.sql" }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "directory", "name": "Handler", "contents": [
                                                    { "type": "file", "name": "AnonymousHandler.cs" },
                                                    { "type": "file", "name": "GetUserHandler.cs" },
                                                    { "type": "file", "name": "GrantedHandler.cs" }
                                                ]
                                            },
                                            {
                                                "type": "directory", "name": "Message", "contents": [
                                                    { "type": "file", "name": "GetUserMessage.cs" },
                                                    { "type": "file", "name": "GrantedMessage.cs" }
                                                ]
                                            },
                                            { "type": "file", "name": "packages.config" },
                                            {
                                                "type": "directory", "name": "Properties", "contents": [
                                                    { "type": "file", "name": "AssemblyInfo.cs" }
                                                ]
                                            },
                                            {
                                                "type": "directory", "name": "Scripts", "contents": [
                                                    {
                                                        "type": "directory", "name": "typings", "contents": [
                                                            {
                                                                "type": "directory", "name": "angularjs", "contents": [
                                                                    { "type": "file", "name": "angular-animate.d.ts" },
                                                                    { "type": "file", "name": "angular-component-router.d.ts" },
                                                                    { "type": "file", "name": "angular-cookies.d.ts" },
                                                                    { "type": "file", "name": "angular.d.ts" },
                                                                    { "type": "file", "name": "angular-mocks.d.ts" },
                                                                    { "type": "file", "name": "angular-resource.d.ts" },
                                                                    { "type": "file", "name": "angular-route.d.ts" },
                                                                    { "type": "file", "name": "angular-sanitize.d.ts" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "angular-local-storage", "contents": [
                                                                    { "type": "file", "name": "index.d.ts" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "jquery", "contents": [
                                                                    { "type": "file", "name": "jquery.d.ts" }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            { "type": "file", "name": "SecurityContainerExtensions.cs" },
                                            { "type": "file", "name": "SecurityEmbeddedModule.cs" }
                                        ]
                                    },
                                    { "type": "file", "name": "Ckrt.Platform.Security.sln" }
                                ]
                            },
                            {
                                "type": "directory", "name": "test", "contents": [
                                    { "type": "file", "name": "auth.helper.ts" }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "directory", "name": "template", "contents": [
                            { "type": "file", "name": "README.md" },
                            {
                                "type": "directory", "name": "source", "contents": [
                                    {
                                        "type": "directory", "name": "Ckrt.Platform.Template", "contents": [
                                            {
                                                "type": "directory", "name": "Api", "contents": [
                                                    { "type": "file", "name": "TemplateHandler.cs" }
                                                ]
                                            },
                                            { "type": "file", "name": "app.config" },
                                            { "type": "file", "name": "Ckrt.Platform.Template.csproj" },
                                            {
                                                "type": "directory", "name": "database", "contents": [
                                                    {
                                                        "type": "directory", "name": "mssql", "contents": [
                                                            {
                                                                "type": "directory", "name": "migration", "contents": [
                                                                    { "type": "file", "name": "01000_Init.sql" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "procedure", "contents": [
                                                                    { "type": "file", "name": "template_get.sql" }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "pgsql", "contents": [
                                                            {
                                                                "type": "directory", "name": "migration", "contents": [
                                                                    { "type": "file", "name": "01000_Init.sql" },
                                                                    { "type": "file", "name": "01001_Patch.sql" }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "procedure", "contents": [
                                                                    { "type": "file", "name": "template_add.sql" },
                                                                    { "type": "file", "name": "template_get.sql" }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "directory", "name": "Handler", "contents": [
                                                    { "type": "file", "name": "BuildTemplateHandler.cs" },
                                                    { "type": "file", "name": "GetTemplateHandler.cs" }
                                                ]
                                            },
                                            {
                                                "type": "directory", "name": "Message", "contents": [
                                                    { "type": "file", "name": "BuildTemplateMessage.cs" },
                                                    { "type": "file", "name": "GetTemplateMessage.cs" },
                                                    { "type": "file", "name": "TemplateException.cs" },
                                                    { "type": "file", "name": "TemplateMessage.cs" }
                                                ]
                                            },
                                            { "type": "file", "name": "packages.config" },
                                            {
                                                "type": "directory", "name": "Properties", "contents": [
                                                    { "type": "file", "name": "AssemblyInfo.cs" }
                                                ]
                                            },
                                            { "type": "file", "name": "TemplateContainerExtensions.cs" }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            { "type": "file", "name": "README.md" },
            {
                "type": "directory", "name": "resource", "contents": [
                    { "type": "file", "name": "icon.png" },
                    { "type": "file", "name": "logo.svg" },
                    { "type": "file", "name": "Migrator.exe" },
                    { "type": "file", "name": "Npgsql-3.2.0.msi" },
                    { "type": "file", "name": "optimized-icon.svg" },
                    { "type": "file", "name": "source-icon.svg" }
                ]
            },
            {
                "type": "directory", "name": "source", "contents": [
                    {
                        "type": "directory", "name": "dumpster", "contents": [
                            {
                                "type": "directory", "name": "android", "contents": [
                                    {
                                        "type": "directory", "name": "app", "contents": [
                                            { "type": "file", "name": "build.gradle" },
                                            {
                                                "type": "directory", "name": "src", "contents": [
                                                    {
                                                        "type": "directory", "name": "debug", "contents": [
                                                            { "type": "file", "name": "AndroidManifest.xml" }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "main", "contents": [
                                                            { "type": "file", "name": "AndroidManifest.xml" },
                                                            {
                                                                "type": "directory", "name": "java", "contents": [
                                                                    {
                                                                        "type": "directory", "name": "com", "contents": [
                                                                            {
                                                                                "type": "directory", "name": "example", "contents": [
                                                                                    {
                                                                                        "type": "directory", "name": "dumpster", "contents": [
                                                                                            { "type": "file", "name": "MainActivity.java" }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "type": "directory", "name": "res", "contents": [
                                                                    {
                                                                        "type": "directory", "name": "drawable", "contents": [
                                                                            { "type": "file", "name": "launch_background.xml" }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "type": "directory", "name": "mipmap-hdpi", "contents": [
                                                                            { "type": "file", "name": "ic_launcher.png" }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "type": "directory", "name": "mipmap-mdpi", "contents": [
                                                                            { "type": "file", "name": "ic_launcher.png" }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "type": "directory", "name": "mipmap-xhdpi", "contents": [
                                                                            { "type": "file", "name": "ic_launcher.png" }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "type": "directory", "name": "mipmap-xxhdpi", "contents": [
                                                                            { "type": "file", "name": "ic_launcher.png" }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "type": "directory", "name": "mipmap-xxxhdpi", "contents": [
                                                                            { "type": "file", "name": "ic_launcher.png" }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "type": "directory", "name": "values", "contents": [
                                                                            { "type": "file", "name": "styles.xml" }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "profile", "contents": [
                                                            { "type": "file", "name": "AndroidManifest.xml" }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    { "type": "file", "name": "build.gradle" },
                                    {
                                        "type": "directory", "name": "gradle", "contents": [
                                            {
                                                "type": "directory", "name": "wrapper", "contents": [
                                                    { "type": "file", "name": "gradle-wrapper.properties" }
                                                ]
                                            }
                                        ]
                                    },
                                    { "type": "file", "name": "gradle.properties" },
                                    { "type": "file", "name": "settings.gradle" }
                                ]
                            },
                            { "type": "file", "name": "app.code-workspace" },
                            {
                                "type": "directory", "name": "assets", "contents": [
                                    { "type": "file", "name": "control.jpg" },
                                    { "type": "file", "name": "control.png" },
                                    {
                                        "type": "directory", "name": "images", "contents": [
                                            { "type": "file", "name": "control.jpg" },
                                            { "type": "file", "name": "control.png" },
                                            { "type": "file", "name": "link.jpg" }
                                        ]
                                    },
                                    { "type": "file", "name": "link.jpg" },
                                    { "type": "file", "name": "link.png" }
                                ]
                            },
                            {
                                "type": "directory", "name": "ios", "contents": [
                                    {
                                        "type": "directory", "name": "Flutter", "contents": [
                                            { "type": "file", "name": "AppFrameworkInfo.plist" },
                                            { "type": "file", "name": "Debug.xcconfig" },
                                            { "type": "file", "name": "flutter_export_environment.sh" },
                                            { "type": "file", "name": "Release.xcconfig" }
                                        ]
                                    },
                                    {
                                        "type": "directory", "name": "Runner", "contents": [
                                            { "type": "file", "name": "AppDelegate.h" },
                                            { "type": "file", "name": "AppDelegate.m" },
                                            {
                                                "type": "directory", "name": "Assets.xcassets", "contents": [
                                                    {
                                                        "type": "directory", "name": "AppIcon.appiconset", "contents": [
                                                            { "type": "file", "name": "Contents.json" },
                                                            { "type": "file", "name": "Icon-App-1024x1024@1x.png" },
                                                            { "type": "file", "name": "Icon-App-20x20@1x.png" },
                                                            { "type": "file", "name": "Icon-App-20x20@2x.png" },
                                                            { "type": "file", "name": "Icon-App-20x20@3x.png" },
                                                            { "type": "file", "name": "Icon-App-29x29@1x.png" },
                                                            { "type": "file", "name": "Icon-App-29x29@2x.png" },
                                                            { "type": "file", "name": "Icon-App-29x29@3x.png" },
                                                            { "type": "file", "name": "Icon-App-40x40@1x.png" },
                                                            { "type": "file", "name": "Icon-App-40x40@2x.png" },
                                                            { "type": "file", "name": "Icon-App-40x40@3x.png" },
                                                            { "type": "file", "name": "Icon-App-60x60@2x.png" },
                                                            { "type": "file", "name": "Icon-App-60x60@3x.png" },
                                                            { "type": "file", "name": "Icon-App-76x76@1x.png" },
                                                            { "type": "file", "name": "Icon-App-76x76@2x.png" },
                                                            { "type": "file", "name": "Icon-App-83.5x83.5@2x.png" }
                                                        ]
                                                    },
                                                    {
                                                        "type": "directory", "name": "LaunchImage.imageset", "contents": [
                                                            { "type": "file", "name": "Contents.json" },
                                                            { "type": "file", "name": "LaunchImage@2x.png" },
                                                            { "type": "file", "name": "LaunchImage@3x.png" },
                                                            { "type": "file", "name": "LaunchImage.png" },
                                                            { "type": "file", "name": "README.md" }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "directory", "name": "Base.lproj", "contents": [
                                                    { "type": "file", "name": "LaunchScreen.storyboard" },
                                                    { "type": "file", "name": "Main.storyboard" }
                                                ]
                                            },
                                            { "type": "file", "name": "Info.plist" },
                                            { "type": "file", "name": "main.m" }
                                        ]
                                    },
                                    {
                                        "type": "directory", "name": "Runner.xcodeproj", "contents": [
                                            { "type": "file", "name": "project.pbxproj" },
                                            {
                                                "type": "directory", "name": "project.xcworkspace", "contents": [
                                                    { "type": "file", "name": "contents.xcworkspacedata" }
                                                ]
                                            },
                                            {
                                                "type": "directory", "name": "xcshareddata", "contents": [
                                                    {
                                                        "type": "directory", "name": "xcschemes", "contents": [
                                                            { "type": "file", "name": "Runner.xcscheme" }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "directory", "name": "Runner.xcworkspace", "contents": [
                                            { "type": "file", "name": "contents.xcworkspacedata" }
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "directory", "name": "lib", "contents": [
                                    { "type": "file", "name": "Api.dart" },
                                    { "type": "file", "name": "config.dart" },
                                    { "type": "file", "name": "ControlPage.dart" },
                                    { "type": "file", "name": "DumpsterApp.dart" },
                                    { "type": "file", "name": "DumpsterItemWidget.dart" },
                                    { "type": "file", "name": "LinkPage.dart" },
                                    { "type": "file", "name": "LoadingPlaceholderWidget.dart" },
                                    { "type": "file", "name": "LocationPage.dart" },
                                    { "type": "file", "name": "Locator.dart" },
                                    { "type": "file", "name": "main.dart" },
                                    { "type": "file", "name": "maindevelop.dart" },
                                    { "type": "file", "name": "mainPage.dart" },
                                    { "type": "file", "name": "MainPageItem.dart" },
                                    { "type": "file", "name": "mainproduction.dart" },
                                    { "type": "file", "name": "mainstage.dart" },
                                    { "type": "file", "name": "Push.dart" },
                                    { "type": "file", "name": "Util.dart" },
                                    { "type": "file", "name": "WaitState.dart" }
                                ]
                            },
                            { "type": "file", "name": "pubspec.lock" },
                            { "type": "file", "name": "pubspec.yaml" },
                            { "type": "file", "name": "README.md" }
                        ]
                    },
                    {
                        "type": "directory", "name": "portal", "contents": [
                            {
                                "type": "directory", "name": "database", "contents": [
                                    {
                                        "type": "directory", "name": "after_update", "contents": [
                                            { "type": "file", "name": "001_Source_GrantAdmin.sql" }
                                        ]
                                    },
                                    {
                                        "type": "directory", "name": "config", "contents": [
                                            { "type": "file", "name": "develop.txt" },
                                            { "type": "file", "name": "migrator.txt" },
                                            { "type": "file", "name": "production.txt" },
                                            { "type": "file", "name": "project.txt" },
                                            { "type": "file", "name": "stage.txt" },
                                            { "type": "file", "name": "test.txt" }
                                        ]
                                    },
                                    {
                                        "type": "directory", "name": "migration", "contents": [
                                            { "type": "file", "name": "000000000_source_initial.sql" },
                                            { "type": "file", "name": "000000001_source_tables.sql" },
                                            { "type": "file", "name": "000000002_source_menu.sql" },
                                            { "type": "file", "name": "000000003_source_user.sql" },
                                            { "type": "file", "name": "000000004_source_proc.sql" },
                                            { "type": "file", "name": "000000005_source_api2.sql" },
                                            { "type": "file", "name": "000000006_source_map.sql" },
                                            { "type": "file", "name": "000000007_source_public_user.sql" },
                                            { "type": "file", "name": "000000008_source_fix_public_user.sql" },
                                            { "type": "file", "name": "000000009_source_app_link.sql" },
                                            { "type": "file", "name": "000000010_source_blue_icon.sql" },
                                            { "type": "file", "name": "000000011_source_fix_object_info.sql" },
                                            { "type": "file", "name": "000000999_work_admin.sql" }
                                        ]
                                    },
                                    { "type": "file", "name": "Migrator.bat" },
                                    { "type": "file", "name": "portal.database.csproj" },
                                    {
                                        "type": "directory", "name": "procedure", "contents": [
                                            { "type": "file", "name": "control.sql" },
                                            { "type": "file", "name": "find.sql" },
                                            { "type": "file", "name": "link.sql" },
                                            { "type": "file", "name": "map_event_get_info.sql" },
                                            { "type": "file", "name": "map_event_get.sql" },
                                            { "type": "file", "name": "map_get.sql" },
                                            { "type": "file", "name": "map_object_get_info.sql" },
                                            { "type": "file", "name": "map_object_get.sql" },
                                            { "type": "file", "name": "push.sql" }
                                        ]
                                    },
                                    { "type": "file", "name": "reCreate_branch.bat" },
                                    { "type": "file", "name": "reCreate_develop.bat" },
                                    { "type": "file", "name": "reCreate_stage.bat" },
                                    { "type": "file", "name": "reCreate_test.bat" },
                                    { "type": "file", "name": "update_production.bat" }
                                ]
                            },
                            {
                                "type": "directory", "name": "portal", "contents": [
                                    {
                                        "type": "directory", "name": "App_Start", "contents": [
                                            { "type": "file", "name": "FilterConfig.cs" }
                                        ]
                                    },
                                    { "type": "file", "name": "Global.asax" },
                                    { "type": "file", "name": "Global.asax.cs" },
                                    { "type": "file", "name": "logo.png" },
                                    { "type": "file", "name": "packages.config" },
                                    { "type": "file", "name": "portal.csproj" },
                                    {
                                        "type": "directory", "name": "Properties", "contents": [
                                            { "type": "file", "name": "AssemblyInfo.cs" },
                                            {
                                                "type": "directory", "name": "PublishProfiles", "contents": [
                                                    { "type": "file", "name": "develop.pubxml" },
                                                    { "type": "file", "name": "production.pubxml" },
                                                    { "type": "file", "name": "stage.pubxml" }
                                                ]
                                            }
                                        ]
                                    },
                                    { "type": "file", "name": "Web.config" },
                                    { "type": "file", "name": "Web.Debug.config" },
                                    { "type": "file", "name": "Web.develop.config" },
                                    { "type": "file", "name": "Web.production.config" },
                                    { "type": "file", "name": "Web.Release.config" },
                                    { "type": "file", "name": "Web.stage.config" }
                                ]
                            },
                            {
                                "type": "directory", "name": "portal.business", "contents": [
                                    { "type": "file", "name": "Bootstrapper.cs" },
                                    { "type": "file", "name": "BusinessContainerExtension.cs" },
                                    { "type": "file", "name": "BusinessEmbeddedModule.cs" },
                                    {
                                        "type": "directory", "name": "client", "contents": [
                                            {
                                                "type": "directory", "name": "page", "contents": [
                                                    { "type": "file", "name": "form.html" },
                                                    { "type": "file", "name": "index.html" },
                                                    { "type": "file", "name": "login.html" },
                                                    { "type": "file", "name": "map.html" },
                                                    { "type": "file", "name": "report.html" },
                                                    { "type": "file", "name": "search.html" }
                                                ]
                                            },
                                            {
                                                "type": "directory", "name": "service", "contents": [
                                                    { "type": "file", "name": "routeService.js" }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "directory", "name": "Handler", "contents": [
                                            { "type": "file", "name": "APIHandler.cs" },
                                            { "type": "file", "name": "GetScalarHandler.cs" },
                                            { "type": "file", "name": "GetTableHandler.cs" },
                                            { "type": "file", "name": "SaveFormHandler.cs" }
                                        ]
                                    },
                                    { "type": "file", "name": "index.cshtml" },
                                    { "type": "file", "name": "packages.config" },
                                    { "type": "file", "name": "portal.business.csproj" },
                                    {
                                        "type": "directory", "name": "Properties", "contents": [
                                            { "type": "file", "name": "AssemblyInfo.cs" }
                                        ]
                                    }
                                ]
                            },
                            { "type": "file", "name": "portal.sln" }
                        ]
                    }
                ]
            }
        ]
    }
]