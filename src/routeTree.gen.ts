/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create/Update Routes

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {}
}

// Create and export the route tree

export interface FileRoutesByFullPath {}

export interface FileRoutesByTo {}

export interface FileRoutesById {
  __root__: typeof rootRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: never
  fileRoutesByTo: FileRoutesByTo
  to: never
  id: '__root__'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {}

const rootRouteChildren: RootRouteChildren = {}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": []
    }
  }
}
ROUTE_MANIFEST_END */
