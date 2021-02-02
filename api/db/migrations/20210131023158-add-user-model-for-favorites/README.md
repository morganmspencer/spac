# Migration `20210131023158-add-user-model-for-favorites`

This migration has been generated by Morgan Spencer at 1/30/2021, 9:31:58 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    PRIMARY KEY ("id")
)

CREATE TABLE "_SpacToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    FOREIGN KEY ("A") REFERENCES "Spac"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
)

CREATE UNIQUE INDEX "_SpacToUser_AB_unique" ON "_SpacToUser"("A", "B")

CREATE INDEX "_SpacToUser_B_index" ON "_SpacToUser"("B")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20210130152004-update-spac-unique-fields..20210131023158-add-user-model-for-favorites
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource DS {
   provider = ["sqlite", "postgresql"]
-  url = "***"
+  url = "***"
 }
 generator client {
   provider      = "prisma-client-js"
@@ -14,6 +14,12 @@
   ipoSymbol   String    @unique
   ipoDate     DateTime?
   ipoPrice    String?
   mergerDate  DateTime?
+  users       User[]
   createdAt   DateTime  @default(now())
 }
+
+model User {
+  id        String  @id @default(cuid())
+  favorites Spac[]
+}
```

