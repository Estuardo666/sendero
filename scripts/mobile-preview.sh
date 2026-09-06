#!/usr/bin/env bash
# Temporarily retarget the site's single 478px breakpoint so it activates at the
# current (un-shrinkable) browser viewport, letting us screenshot the mobile
# layout. Run with "on" to enable, "off" to restore.
set -e
C="src/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/root-8a5edab2"
case "$1" in
  on)  find "$C" -name '*.tsx' -exec sed -i 's/478px/4000px/g' {} + ; echo "breakpoint -> 4000px (mobile preview ON)";;
  off) find "$C" -name '*.tsx' -exec sed -i 's/4000px/478px/g' {} + ; echo "breakpoint -> 478px (restored)";;
  *) echo "usage: $0 on|off"; exit 1;;
esac
grep -rc "478px\|4000px" "$C"/*.tsx | sed 's/^/  /'
